const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const auth = require('../middleware/auth');

const User = require('../models/User');
const Valuva = require('../models/Valuva');

// @route   GET api/valuvas
// @desc    Get all valuvas
// @access  Private
router.get('/', async (req, res) => {
  try {
    const valuvas = await Valuva.find();
    res.json(valuvas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/valuvas
// @desc    Add new valuva
// @access  Private

router.post('/', async (req, res) => {
  const {
    name,
    description,
    img,
    consejos,
    familia,
    heladas,
    distancia,
    asociacion,
    dificultad
  } = req.body;

  try {
    const newValuva = new Valuva({
      name,
      description,
      img,
      consejos,
      familia,
      heladas,
      distancia,
      asociacion,
      dificultad
    });

    const valuva = await newValuva.save();
    res.json(valuva);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
