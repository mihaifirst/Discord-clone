const express = require("express");
const router = express.Router();

const ServerController = require("./server.controller");

router.get("", ServerController.getServers);
router.post("/:userId", ServerController.createServer);
// router.patch("/:id", ServerController.updateServerById);
// router.delete("/:id", ServerController.deleteServerById);

module.exports = router;
