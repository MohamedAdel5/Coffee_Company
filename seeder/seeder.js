const connectDB = require("./../utils/connectToDB");
const disconnectDB = require("./../utils/disconnectDB");
const { dropDB } = require("./../utils/dropDB");
const CoffeeMachine = require("../models/CoffeeMachineModel");
const CoffeePod = require("../models/CoffeePodModel");
const seeds = require("./seeds");

const mongoose = require("mongoose");

(async function () {
  await connectDB();
  await dropDB();

  console.log("Running seeds, please wait...");

  try {
    await CoffeeMachine.insertMany(seeds.coffeeMachines);
    await CoffeePod.insertMany(seeds.coffeePods);
  } catch (err) {
    console.log(err);
  }

  await disconnectDB();

  console.log("✅ Seeds executed successfully");
})();
