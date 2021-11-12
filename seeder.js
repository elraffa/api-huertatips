const fs = require('fs');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Load user model
const Valuva = require('./models/Valuva');

// Connect to database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
});

// Read JSON files
const valuvas = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/valuvas.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Valuva.create(valuvas);
    console.log('Data imported');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Valuva.deleteMany();
    console.log('Data destroyed');
    process.exit();
  } catch (err) {}
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
