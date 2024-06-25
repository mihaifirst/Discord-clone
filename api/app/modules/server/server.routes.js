const express = require("express");
const router = express.Router();

const ServerController = require("./server.controller");

router.get("", ServerController.getServers);
router.post("/:userId", ServerController.createServer);
// router.patch("/:userId", ServerController.updateServerById);
router.delete("/:userId/:serverId", ServerController.deleteServerById);

module.exports = router;
