const { StatusCodes } = require("http-status-codes");
const serverCollection = require("./schemas/server.schema");
const usersCollection = require("../user/schemas/user.schema");

module.exports = {
  getServers(request, response) {
      getServersFn()
      .then((servers) => {
        response.write(JSON.stringify(servers));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  createServer(request, response) {
      const userId = request.params.userId;
      const serverName = request.body.name;

      createServerFn(serverName, userId).then((result) => {
          response.write(JSON.stringify(result));
          response.end();
      }).catch((error) =>
          response
              .status(StatusCodes.BAD_REQUEST)
              .send({ message: error.message })
      );
    }
};

function getServersFn() {
    return serverCollection.find();
}

async function createServerFn(serverName, userId) {
  const server = await (await new serverCollection({ name: serverName})).save();
  await usersCollection.updateOne({ _id: userId }, { $push: { servers: server._id }});

  return new Promise((resolve, reject) => {
      resolve(server);
  })
}