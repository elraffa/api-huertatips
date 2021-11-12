const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Bienvenido a la API de Huerta Tips' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/valuvas', require('./routes/valuvas'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
