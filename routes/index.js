var express = require('express');
var router = express.Router();
const InstrumentsController = require('../controllers/instruments_controller');
const AudioController = require('../controllers/audioSamples_controller');

function asyncHandler(cb){
  return async (req,res, next) => {
      try {
          await cb(req, res, next);
      } catch(err) {
          next(err);
      }
  }
}

// get an instrument & its audio samples
router.get('/instruments', asyncHandler(async(req, res)=> {
  const instruments = await InstrumentsController.get(req, res);
  // return res.send(instruments)
  
}))

router.post('/instruments', asyncHandler(async (req, res) => {
  const instrument = await InstrumentsController.create(req, res);

}))

// router.get('instruments/:name', asyncHandler(async (req, res) => {
//   const instrument = await InstrumentsController
// }))

router.post('/instruments/:name', asyncHandler(async (req, res) => {
  const audioSample = await AudioController.create(req, res);
}))

module.exports = router;


