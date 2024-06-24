const { StatusCodes } = require("http-status-codes");
const usersCollection = require("./schemas/user.schema");

module.exports = {
  getUsers(request, response) {
    getUsersFn(request.user)
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) =>
        response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },

  createUser(request, response) {
    createUserFn(request.body)
      .then((user) => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch((error) =>
        response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  updateUserById(request, response) {
    const id = request.params.id;

    updateUserByIdFn(id, request.body)
      .then((updateUser) => {
        response.write(JSON.stringify(updateUser));
        response.end();
      })
      .catch((error) =>
        response
          .sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ message: error.message })
      );
  },
  deleteUserById(request, response) {
    const id = request.params.id;

    deleteUserByIdFn(id)
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) =>
        response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function getUsersFn() {
  return usersCollection.find();
}

async function createUserFn(usersProps) {
  return new usersCollection(usersProps).save();
}

async function updateUserByIdFn(id, newUser) {
  const { fullName, username, email, password, avatar } = newUser;
  await getUsersFn();

  return usersCollection.findByIdAndUpdate(
    id,
    {
      fullName,
      username,
      email,
      password,
      avatar,
    },
    {
      new: true,
    }
  );
}

async function deleteUserByIdFn(id) {
  return usersCollection.findByIdAndDelete(id);
}
