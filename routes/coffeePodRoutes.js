const express = require("express");
const coffeePodController = require("./../controllers/coffeePodController");

const router = express.Router();

router.route("/").get(coffeePodController.getCoffeePods).post(coffeePodController.addCoffeePod);

router.get(
  "/large-coffee-pods",
  coffeePodController.getAllLargePodsAlias,
  coffeePodController.getCoffeePods
);
router.get(
  "/small-coffee-pods",
  coffeePodController.getAllSmallPodsAlias,
  coffeePodController.getCoffeePods
);
router.get(
  "/espresso-vanilla-pods",
  coffeePodController.getAllEspressoVanillaPodsAlias,
  coffeePodController.getCoffeePods
);
router.get(
  "/seven-pack-pods",
  coffeePodController.getAll7PackPodsAlias,
  coffeePodController.getCoffeePods
);

module.exports = router;
