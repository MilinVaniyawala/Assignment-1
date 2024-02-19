const { getWineDetails } = require("../models/wineModel");

exports.getIndex = async (request, response) => {
  try {
    // set up all wine details data here.
    let wineBottles = await getWineDetails();
    response.render("index", { title: "Home", wines: wineBottles });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
