// import required modules
const express = require("express");
const path = require("path");

// Database
const { MongoClient } = require("mongodb");

// Connection URL for MongoDB Atlas
const dbUrl = "mongodb+srv://test:test@wine.p7boatt.mongodb.net/wines";
const client = new MongoClient(dbUrl);

// Set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

// Set up views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set up static files
app.use(express.static(path.join(__dirname, "public")));

// Bootstrap is installed in node_modules
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

// Set up for easier data parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Up Page Routes
app.get("/", async (request, response) => {
  // set up all wine details data here.
  let wineBottles = await getWineDetails();
  console.log(wineBottles);
  response.render("index", { title: "Home", wines: wineBottles });
});

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// Database Functions
async function connection() {
  db = client.db("wines");
  return db;
}

// function to select all wine bottles in the wineDetails collection
async function getWineDetails() {
  db = await connection();
  let results = db.collection("wineDetails").find({});
  let response = await results.toArray();
  return response;
}
