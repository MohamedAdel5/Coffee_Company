/* istanbul ignore file */
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  dotenv.config({
    path: "./config.env",
  });
  const DB = process.env.DATABASE;

  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("✅ database connected");
  } catch (err) {
    console.log(`❌ Error connecting to database     ${err.toString()}`);
    process.exit(1);
  }
};

module.exports = connectDB;
