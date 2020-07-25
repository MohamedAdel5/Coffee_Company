/* istanbul ignore file */
const mongoose = require("mongoose");

const dropDB = async function (collectionName) {
  if (collectionName) {
    try {
      await mongoose.connection.db.dropCollection(collectionName);
      console.log(`✅ ${collectionName} collection dropped successfully.`);
    } catch (err) {
      console.log(`✅ ${collectionName} collection was already empty.`);
    }
  } else {
    try {
      const db = await mongoose.connection.db;

      let collections;
      if (db) {
        collections = await db.collections();

        if (collections.length !== 0) {
          await db.dropDatabase();
          console.log(`✅ database dropped successfully`);
        } else {
          console.log(`✅ database was already empty.`);
        }
      } else {
        console.log(`❌ Could NOT drop the DB due to Connection Error.`);
        process.exit(1);
      }
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
};

exports.dropDB = dropDB;
