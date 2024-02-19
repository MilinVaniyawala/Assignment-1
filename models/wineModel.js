// Database
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");

// load the enviroment variables
dotenv.config();

// Connection URL for MongoDB Atlas
const dbUrl = process.env.DB_URL;
const client = new MongoClient(dbUrl);

// Database Functions
async function connection() {
  await client.connect();
  const db = client.db("wines");
  return db;
}

// function to select all wine bottles in the wineDetails collection
async function getWineDetails() {
  const db = await connection();
  let results = db.collection("wineDetails").find({});
  let response = await results.toArray();

  return response;
}

// function to select all wine bottles on the shop page
async function getWineDetailsByType() {
  const db = await connection();
  let results = db.collection("wineDetails").find({});
  let response = await results.toArray();

  // Group wines by type
  const winesByType = {};

  response.forEach((wine) => {
    const wineType = wine.type;
    if (!winesByType[wineType]) {
      winesByType[wineType] = [];
    }
    winesByType[wineType].push(wine);
  });

  return winesByType;
}

// function to insert new wine
async function insertWine(addWine) {
  const db = await connection();
  let status = await db.collection("wineDetails").insertOne(addWine);
  console.log(status);
}

// function to delete wine
async function deleteWine(id) {
  const db = await connection();
  const deleteId = { _id: new ObjectId(id) };
  const result = await db.collection("wineDetails").deleteOne(deleteId);
  if (result.deletedCount === 1) {
    console.log("Delete Successfully!!");
  }
}

// function to get individual wine data
async function getSingleWineData(id) {
  const db = await connection();
  const editId = { _id: new ObjectId(id) };
  const result = await db.collection("wineDetails").findOne(editId);
  return result;
}

// Update Wine Details
async function editWine(filter, wine) {
  const db = await connection();
  let result = await db
    .collection("wineDetails")
    .updateOne(filter, { $set: wine });

  if (result.modifiedCount === 1) {
    console.log("Update Successfully!!");
  } else {
    console.log("Update Failed!!");
  }
}

module.exports = {
  getWineDetails,
  getWineDetailsByType,
  insertWine,
  deleteWine,
  getSingleWineData,
  editWine,
};
