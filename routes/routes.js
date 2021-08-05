// const express = require('express');
// const router = express.Router();

// const records = require('./records')

// function asyncHandler(cb){
//     return async(req,res,next) => {
//         try{
//             await cb(req,res,next);
//         } catch(err) {
//             next(err);
//         }
//     }
// }

// router.get('/instruments', asyncHandler(async (req, res) => {
//     res.send({ hi: 'there'})
// }))

// // send a GET request to /instruments
// router.get('/instruments/:id', asyncHandler(async (req,res) => {
//     const instrument = await records.getInstrumemt(req.params.id);
//     res(instrument);
// }));

// // send a POST to /instruments to create new instrument
// router.post('/instruments', asyncHandler( async (req, res) => {
//     const instrument = await records.createInstrument({
//         name:req.body.name
//     });
//     res.status(201).json(instrument)
// }))
// // send a POST to /instruments to create new sample
// router.post('/instruments/:id', asyncHandler( async (req, res) => {
//     const audioSample = await records.createSample({
//         index:req.body.index,
//         name:req.body.name
//     });
//     res.status(201).json(audioSample)
// }));