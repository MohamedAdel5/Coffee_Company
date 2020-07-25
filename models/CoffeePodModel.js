const mongoose = require("mongoose");

const coffeePodSchema = new mongoose.Schema(
  {
    sku_code: {
      type: String,
      unique: [
        true,
        "This SKU Code Is A Duplicate Of An Existing One, But SKU Codes Must Be Unique.",
      ],
      required: [true, "The SKU Code Of The Coffee Pod Must Be Specified."],
    },
    product_type: {
      type: String,
      enum: {
        values: ["COFFEE_POD_SMALL", "COFFEE_POD_LARGE", "ESPRESSO_POD"],
        message: "Invalid Type Value For A Coffee Pod.",
      },
      required: [true, "The Type Value Of The Coffee Pod Must Be Specified."],
    },
    coffee_flavor: {
      type: String,
      enum: {
        values: [
          "COFFEE_FLAVOR_VANILLA",
          "COFFEE_FLAVOR_CARAMEL",
          "COFFEE_FLAVOR_PSL",
          "COFFEE_FLAVOR_MOCHA",
          "COFFEE_FLAVOR_HAZELNUT",
        ],
        message: "Invalid Flavor Value For A Coffee Pod.",
      },
      required: [true, "The Coffee Flavor Of The Coffee Pod Must Be Specified."],
    },
    pack_size: {
      type: Number,
      validate: {
        validator: function (v) {
          return [1, 3, 5, 7].includes(v);
        },
        message: "Invalid Pack Size For A Coffee Pod",
      },
      required: [true, "The Pack Size Of The Coffee Pod Must Be Specified."],
    },
  },
  {
    strict: "throw",
  }
);

const CoffeePod = mongoose.model("CoffeePod", coffeePodSchema);
module.exports = CoffeePod;
