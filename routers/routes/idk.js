const express = require("express");
const idkRouter = express.Router();

const {
  createIdk,
  getIdks,
  deleteIdk,
  updateIdk,
} = require("../controllers/idk");

idkRouter.post("/newIdk", createIdk);
idkRouter.get("/getIDks", getIdks);
idkRouter.delete("/deleteIdk/:id", deleteIdk);
idkRouter.put("/updateIdk/:id", updateIdk);

module.exports = idkRouter;
