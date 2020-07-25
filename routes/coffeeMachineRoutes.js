const express = require("express");
const coffeeMachineController = require("./../controllers/coffeeMachineController");

const router = express.Router();

router
  .route("/")
  .get(coffeeMachineController.getCoffeeMachines)
  .post(coffeeMachineController.addCoffeeMachine);

router.get(
  "/large-coffee-machines",
  coffeeMachineController.getAllLargeMachinesAlias,
  coffeeMachineController.getCoffeeMachines
);
router.get(
  "/espresso-machines",
  coffeeMachineController.getAllEspressoMachinesAlias,
  coffeeMachineController.getCoffeeMachines
);

module.exports = router;
