const { getWineDetailsByType } = require("../models/wineModel");

exports.getShop = async (request, response) => {
  try {
    // All Wine Bottles Displays Here
    let wineByTypes = await getWineDetailsByType();
    response.render("shop", { title: "Shop", winesByType: wineByTypes });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
