const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const authorizationHeader = request.headers["authorization"];
    if (!authorizationHeader) {
      return response
        .status(401)
        .send({ message: "Authorization header missing", success: false });
    }

    const token = request.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
      if (error) {
        return response
          .status(200)
          .send({ message: "Token is not valid", success: false });
      } else {
        request.body.userId = decode.identifier;
        next();
      }
    });
  } catch (error) {
    console.error(error); // Handle or log the error appropriately
    response.status(500).send({ message: "Internal server error", success: false });
  }
};
