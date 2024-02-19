// import required modules
const express = require("express");
const path = require("path");

// define routes
const homeRoutes = require("./routes/homeRoutes");
const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/adminRoutes");

// set up express object and port
const app = express();
const port = process.env.PORT || "8888";

// set up views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// set up static files
app.use(express.static(path.join(__dirname, "public")));

// bootstrap is installed in node_modules
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

// set up for easier data parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up page routes
app.use(homeRoutes);
app.use(shopRoutes);
app.use(adminRoutes);

// set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
