const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
// app
const app = express();
const idkRouter = require("./routers/routes/idk");

// app use
app.use(cors());

app.use(express.json());
app.use(idkRouter);

// PORT
const PORT = process.env.PORT;

// App.listen
app.listen(PORT, () => {
  console.log(`SERVER RUNING ON ${PORT}`);
});
