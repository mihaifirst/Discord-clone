require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

app.use(require("cors")());
app.use(require("body-parser").json());

/* Chat connection / sockets */
const server = require("http").createServer(app);

// const { User } = require("./app/shared/helpers/user.class");

/* Routes */
// const userRoutes = require("./app/modules/user/user.routes");

// app.use("/api", userRoutes);

const mongoConfig = require("./app/config/mongo.config");
const srv = (err) => {
  if (err) console.log("Mongo error!", err);
  console.log(`Database is ready! on ${process.env.MONGO_URL}`);
  server.listen(process.env.PORT, () =>
    console.log(`Server started, on ${process.env.PORT}`)
  );
};
mongoose.connect(process.env.MONGO_URL, mongoConfig, srv);
