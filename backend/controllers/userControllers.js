const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = require("../schemas/userModel");
const courseSchema = require("../schemas/courseModel");
const enrolledCourseSchema = require("../schemas/enrolledCourseModel");
const coursePaymentSchema = require("../schemas/coursePaymentModel");
//////////for registering/////////////////////////////
const registerController = async (request, response) => {
  try {
    const existsUser = await userSchema.findOne({ email: request.body.email });
    if (existsUser) {
      return response
        .status(200)
        .send({ message: "User already exists", success: false });
    }
    const password = request.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    request.body.password = hashedPassword;

    const newUser = new userSchema(request.body);
    await newUser.save();

    return response.status(201).send({ message: "Register Success", success: true });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

////for the login
const loginController = async (request, response) => {
  try {
    const studentUser = await userSchema.findOne({ email: request.body.email });
    if (!studentUser) {
      return response
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(request.body.password, studentUser.password);
    if (!isMatch) {
      return response
        .status(200)
        .send({ message: "Invalid email or password", success: false });
    }
    const token = jwt.sign({ identifier: studentUser._id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });
    studentUser.password = undefined;
    return response.status(200).send({
      message: "Login success successfully",
      success: true,
      token,
      userData: studentUser,
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

//get all courses
const getAllCoursesController = async (request, response) => {
  try {
    const allCourses = await courseSchema.find();
    if (!allCourses) {
      return response.status(404).send("No Courses Found");
    }

    return response.status(200).send({
      success: true,
      courseData: allCourses,
    });
  } catch (error) {
    console.error("Error in deleting course:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to delete course" });
  }
};

////////posting course////////////
const postCourseController = async (request, response) => {
  try {
    let price;
    // Extract courseData from the request body and files
    const {
      userId,
      C_educator,
      C_title,
      C_categories,
      C_price,
      C_description,
      S_title,
      S_description,
    } = request.body; 
    const S_content = request.files.map((file) => file.filename); // Assuming you want to store the filenames in S_content
    // Create an array of sections
    const sections = [];
    if (S_content.length > 1){
      for (let i = 0; i < S_content.length; i++) {
        sections.push({
          S_title: S_title[i],
          S_content: {
            filename: S_content[i],
            path: `/uploads/${S_content[i]}`,
          },
          S_description: S_description[i],
        });
      }
    } else{
      sections.push({
        S_title: S_title,
        S_content: {
          filename: S_content[0],
          path: `/uploads/${S_content[0]}`,
        },
        S_description: S_description,
      });
    }
    
    if (C_price == 0) {
      price = "free";
    } else {
      price = C_price;
    }
    // Create an instance of the course schema
    const course = new courseSchema({
      userId,
      C_educator,
      C_title,
      C_categories,
      C_price: price,
      C_description,
      sections,
    });
    // Save the course instance to the database
    await course.save();
    response
      .status(201)
      .send({ success: true, message: "Course created successfully" });
  } catch (error) {
    console.error("Error creating course:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to create course" });
  }
};

///all courses for the teacher
const getAllCoursesUserController = async (request, response) => {
  try {
    const allCourses = await courseSchema.find({ userId: request.body.userId });
    if (!allCourses) {
      response.send({
        success: false,
        message: "No Courses Found",
      });
    } else {
      response.send({
        success: true,
        message: "All Courses Fetched Successfully",
        courseData: allCourses,
      });
    }
  } catch (error) {
    console.error("Error in fetching courses:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to fetch courses" });
  }
};

///delete courses by the teacher
const deleteCourseController = async (request, response) => {
  const { courseid } = request.params; // Use the correct parameter name
  try {
    // Attempt to delete the course by its ID
    const course = await courseSchema.findByIdAndDelete({ _id: courseid });

    // Check if the course was found and deleted successfully
    if (course) {
      response
        .status(200)
        .send({ success: true, message: "Course deleted successfully" });
    } else {
      response.status(404).send({ success: false, message: "Course not found" });
    }
  } catch (error) {
    console.error("Error in deleting course:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to delete course" });
  }
};

////enrolled course by the student

const enrolledCourseController = async (request, response) => {
  const { courseid } = request.params;
  const { userId } = request.body;
  try {
    const course = await courseSchema.findById(courseid);

    if (!course) {
      return response
        .status(404)
        .send({ success: false, message: "Course Not Found!" });
    }

    let course_Length = course.sections.length;

    // Check if the studentUser is already enrolled in the course
    const enrolledCourse = await enrolledCourseSchema.findOne({
      courseId: courseid,
      userId: userId,
      course_Length: course_Length,
    });

    if (!enrolledCourse) {
      const enrolledCourseInstance = new enrolledCourseSchema({
        courseId: courseid,
        userId: userId,
        course_Length: course_Length,
      });

      const coursePayment = new coursePaymentSchema({
        userId: request.body.userId,
        courseId: courseid,
        ...request.body,
      });

      await coursePayment.save();
      await enrolledCourseInstance.save();

      // Increment the 'enrolled' count of the course by +1
      course.enrolled += 1;
      await course.save();

      response.status(200).send({
        success: true,
        message: "Enroll Successfully",
        course: { identifier: course._id, Title: course.C_title },
      });
    } else {
      response.status(200).send({
        success: false,
        message: "You are already enrolled in this Course!",
        course: { identifier: course._id, Title: course.C_title },
      });
    }
  } catch (error) {
    console.error("Error in enrolling course:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to enroll in the course" });
  }
};

/////sending the course content for learning to student
const sendCourseContentController = async (request, response) => {
  const { courseid } = request.params;

  try {
    const course = await courseSchema.findById({ _id: courseid });
    if (!course)
      return response.status(404).send({
        success: false,
        message: "No such course found",
      });

    const studentUser = await enrolledCourseSchema.findOne({
      userId: request.body.userId,
      courseId: courseid, // Add the condition to match the courseId
    });

    if (!studentUser) {
      return response.status(404).send({
        success: false,
        message: "User not found",
      });
    } else {
      return response.status(200).send({
        success: true,
        courseContent: course.sections,
        completeModule: studentUser.progress,
        certficateData: studentUser,
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return response.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

//////////////completing module////////
const completeSectionController = async (request, response) => {
  const { courseId, sectionId } = request.body; // Assuming you send courseId and sectionId in the request body

  // console.log(courseId, sectionId)
  try {
    // Check if the studentUser is enrolled in the course
    const enrolledCourseContent = await enrolledCourseSchema.findOne({
      courseId: courseId,
      userId: request.body.userId, // Assuming you have studentUser information in request.studentUser
    });

    if (!enrolledCourseContent) {
      return response
        .status(400)
        .send({ message: "User is not enrolled in the course" });
    }

    // Update the progress for the section
    const updatedProgress = enrolledCourseContent.progress || [];
    updatedProgress.push({ sectionId: sectionId });

    // Update the progress in the database
    await enrolledCourseSchema.findOneAndUpdate(
      { _id: enrolledCourseContent._id },
      { progress: updatedProgress },
      { new: true }
    );

    response.status(200).send({ message: "Section completed successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Internal server error" });
  }
};

////////////get all courses for paricular studentUser
const sendAllCoursesUserController = async (request, response) => {
  const { userId } = request.body;
  try {
    // First, fetch the enrolled courses for the studentUser
    const enrolledCourses = await enrolledCourseSchema.find({ userId });

    // Now, let's retrieve course details for each enrolled course
    const coursesDetails = await Promise.all(
      enrolledCourses.map(async (enrolledCourse) => {
        // Find the corresponding course details using courseId
        const courseDetails = await courseSchema.findOne({
          _id: enrolledCourse.courseId,
        });
        return courseDetails;
      })
    );

    return response.status(200).send({
      success: true,
      courseData: coursesDetails,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  registerController,
  loginController,
  getAllCoursesController,
  postCourseController,
  getAllCoursesUserController,
  deleteCourseController,
  enrolledCourseController,
  sendCourseContentController,
  completeSectionController,
  sendAllCoursesUserController,
};
