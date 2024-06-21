const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

router.get("", UserController.getUsers);
router.post("", UserController.createUser);
router.patch("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
