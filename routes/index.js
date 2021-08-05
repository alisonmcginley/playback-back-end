var express = require('express');
var router = express.Router();
const InstrumentsController = require('../controllers/instruments_controller');

function asyncHandler(cb){
  return async (req,res, next) => {
      try {
          await cb(req, res, next);
      } catch(err) {
          next(err);
      }
  }
}
router.get('/instruments', asyncHandler(async(req, res)=> {
  const instruments = await InstrumentsController.greeting(req, res);
  res.json(instruments)
}))

router.post('/instruments', asyncHandler(async (req, res) => {
  const instrument = await InstrumentsController.create(req, res);
  
}))

module.exports = router;


