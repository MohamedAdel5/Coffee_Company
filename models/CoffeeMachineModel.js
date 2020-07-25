const mongoose = require("mongoose");

const coffeeMachineSchema = new mongoose.Schema(
  {
    sku_code: {
      type: String,
      unique: [
        true,
        "This SKU Code Is A Duplicate Of An Existing One, But SKU Codes Must Be Unique.",
      ],
      required: [true, "The SKU Code Of The Coffee Machine Must Be Specified."],
    },
    product_type: {
      type: String,
      enum: {
        values: ["COFFEE_MACHINE_SMALL", "COFFEE_MACHINE_LARGE", "ESPRESSO_MACHINE"],
        message: "Invalid Type Value For A Coffee Machine.",
      },
      required: [true, "The Type Value Of The Coffee Machine Must Be Specified."],
    },
    water_line_compatible: {
      type: Boolean,
      required: [true, "The Water Line Compatibility Of The Coffee Machine Must Be Specified."],
    },
    model: {
      type: String,
      enum: {
        values: ["base", "premium", "deluxe"],
        message: "Invalid Model For A Coffee Machine.",
      },
    },
  },
  {
    strict: "throw",
  }
);

const CoffeeMachine = mongoose.model("CoffeeMachine", coffeeMachineSchema);
module.exports = CoffeeMachine;
