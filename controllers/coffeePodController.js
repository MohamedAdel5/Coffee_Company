//Include modules:-
//-----------------------------------------------------------------
const CoffeePod = require("./../models/CoffeePodModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");
const DbQueryManager = require("./../utils/dbQueryManager");

//Route Handlers:-
//-----------------------------------------------------------------
exports.addCoffeePod = catchAsync(async (req, res, next) => {
  //Create new coffee pod (Note that all the data validation occurs in the schema)
  const newCoffeePod = await CoffeePod.create(req.body);
  if (!newCoffeePod) {
    next(new AppError("There Was An Error Saving Data To Database", 500));
  } else {
    res.status(200).json({
      status: "success",
      data: newCoffeePod,
    });
  }
});

exports.getCoffeePods = catchAsync(async (req, res, next) => {
  //Set Default Values For Pagination Parameters
  //Get The First Page. Each Page Contains A Number Of Documents (This Number Is Set In 'config.env' file)
  if (!req.query.page) req.query.page = 1;
  if (!req.query.limit) req.query.limit = process.env.QUERY_PAGINATION_LIMIT;

  //Get Data From DB
  let dbQuery = CoffeePod.find({});
  const dbQueryManager = new DbQueryManager(dbQuery);
  dbQuery = dbQueryManager.all(req.query); //Apply select - sort - filter fields(project) - pagination on the query.
  const data = await dbQuery;

  //Send Data To User
  if (!data) next(new AppError("There Was An Error Retrieving Data From Database", 500));
  else {
    res.status(200).json({
      status: "success",
      data,
    });
  }
});

exports.getAllLargePodsAlias = (req, res, next) => {
  req.query.product_type = "COFFEE_POD_LARGE";
  next();
};

exports.getAllSmallPodsAlias = (req, res, next) => {
  req.query.product_type = "COFFEE_POD_SMALL";
  next();
};

exports.getAllEspressoVanillaPodsAlias = (req, res, next) => {
  req.query.product_type = "ESPRESSO_POD";
  req.query.coffee_flavor = "COFFEE_FLAVOR_VANILLA";
  next();
};

exports.getAll7PackPodsAlias = (req, res, next) => {
  req.query.pack_size = "7";
  next();
};
