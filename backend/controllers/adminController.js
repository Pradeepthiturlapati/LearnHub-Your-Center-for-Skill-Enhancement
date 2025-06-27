const userSchema = require("../schemas/userModel");
const courseSchema = require("../schemas/courseModel");
const enrolledCourseSchema = require("../schemas/enrolledCourseModel");
const coursePaymentSchema = require("../schemas/coursePaymentModel");

const getAllUsersController = async (request, response) => {
  try {
    const allUsers = await userSchema.find();
    if (allUsers == null || !allUsers) {
      return response.status(401).send({ message: "No users found" });
    }
    response.status(200).send({ success: true, courseData: allUsers });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

const getAllCoursesController = async (request, response) => {
  try {
    const allCourses = await courseSchema.find();
    if (allCourses == null || !allCourses) {
      return response.status(401).send({ message: "No courses found" });
    }
    response.status(200).send({ success: true, courseData: allCourses });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

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

const deleteUserController = async (request, response) => {
  const { userid } = request.params; // Use the correct parameter name
  try {
    // Attempt to delete the course by its ID
    const studentUser = await userSchema.findByIdAndDelete({ _id: userid });

    // Check if the course was found and deleted successfully
    if (studentUser) {
      response
        .status(200)
        .send({ success: true, message: "User deleted successfully" });
    } else {
      response.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error in deleting studentUser:", error);
    response
      .status(500)
      .send({ success: false, message: "Failed to delete course" });
  }
};

module.exports = {
  getAllUsersController,
  getAllCoursesController,
  deleteCourseController,
  deleteUserController,
};
