const {
  getWineDetails,
  insertWine,
  getSingleWineData,
  editWine,
  deleteWine,
} = require("../models/wineModel");
// Database
const { ObjectId } = require("mongodb");

exports.getAdmin = async (request, response) => {
  try {
    // Admin Page [List Of Wines In Table]
    const wineBottleList = await getWineDetails();
    response.render("admin/admin", {
      title: "Admin",
      listWine: wineBottleList,
    });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

// Add Wine
exports.getAdd = async (request, response) => {
  response.render("admin/wine-add", { title: "Add Wine" });
};

// Submit Event After Click on insert form of Wine
exports.postAdd = async (request, response) => {
  // for POST Data ,retrieve field data using request.body.<field-name>
  // retrieve values from submitted POST Form
  try {
    let name = request.body.name;
    let type = request.body.type;
    let price = request.body.price;
    let size = request.body.size;
    let imageURL = request.body.imageURL;

    let addWine = {
      name: name,
      type: type,
      price: price,
      size: size,
      imageURL: imageURL,
    };

    await insertWine(addWine);
    response.redirect("/admin");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

// Update Wine
exports.getUpdate = async (request, response) => {
  try {
    if (request.query.wineId) {
      const editData = await getSingleWineData(request.query.wineId);
      const data = await getWineDetails();
      response.render("admin/wine-update", {
        title: "Update wine",
        data: data,
        editWine: editData,
      });
    } else {
      response.redirect("/admin");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

// Submit Event After Click on update form of Wine
exports.postUpdate = async (request, response) => {
  try {
    let id = { _id: new ObjectId(request.body.wineId) };
    // retrieve values from submitted POST Form
    let name = request.body.name;
    let type = request.body.type;
    let price = request.body.price;
    let size = request.body.size;
    let imageURL = request.body.imageURL;

    let updateWine = {
      name: name,
      type: type,
      price: price,
      size: size,
      imageURL: imageURL,
    };

    await editWine(id, updateWine);
    response.redirect("/admin");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

// Delete Wine
exports.getDelete = async (request, response) => {
  try {
    const id = request.query.wineId;
    await deleteWine(id);
    response.redirect("/admin");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
