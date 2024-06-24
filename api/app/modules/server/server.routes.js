const express = require("express");
const router = express.Router();

const ServerController = require("./server.controller");

router.get("/getServers", ServerController.getServers);
router.post("", ServerController.createServer);
router.patch("/:id", ServerController.updateServerById);
router.delete("/:id", ServerController.deleteServerById);

module.exports = router;
