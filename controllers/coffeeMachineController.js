//Include modules:-
//-----------------------------------------------------------------
const CoffeeMachine = require("./../models/CoffeeMachineModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");
const DbQueryManager = require("./../utils/dbQueryManager");

//Route Handlers:-
//-----------------------------------------------------------------
exports.addCoffeeMachine = catchAsync(async (req, res, next) => {
  //Create new coffee machine (Note that all the data validation occurs in the schema)
  const newCoffeeMachine = await CoffeeMachine.create(req.body);
  if (!newCoffeeMachine) {
    next(new AppError("There Was An Error Saving Data To Database", 500));
  } else {
    res.status(200).json({
      status: "success",
      data: newCoffeeMachine,
    });
  }
});

exports.getCoffeeMachines = catchAsync(async (req, res, next) => {
  //Set Default Values For Pagination Parameters
  //Get The First Page. Each Page Contains A Number Of Documents (This Number Is Set In 'config.env' file)
  if (!req.query.page) req.query.page = 1;
  if (!req.query.limit) req.query.limit = process.env.QUERY_PAGINATION_LIMIT;

  //Get Data From DB
  let dbQuery = CoffeeMachine.find({});
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

exports.getAllLargeMachinesAlias = (req, res, next) => {
  req.query.product_type = "COFFEE_MACHINE_LARGE";
  next();
};

exports.getAllEspressoMachinesAlias = (req, res, next) => {
  req.query.product_type = "ESPRESSO_MACHINE";
  next();
};
