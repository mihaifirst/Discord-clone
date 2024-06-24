const { StatusCodes } = require("http-status-codes");
const serverColleciton = require("./schemas/server.schema");
const usersCollection = require("../user/schemas/user.schema");

module.exports = {
  getServers(request, response) {
    getServersFn(request.users)
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};
