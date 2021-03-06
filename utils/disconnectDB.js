/* istanbul ignore file */
const mongoose = require("mongoose");

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("✅ database disconnected");
  } catch (err) {
    console.log("❌ Fail during disconnecting database");
  }
};

module.exports = disconnectDB;
