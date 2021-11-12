const mongoose = require('mongoose');

const ValuvaSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  consejos: { type: String, required: true },
  familia: { type: String, required: true },
  heladas: { type: String, required: true },
  distancia: { type: String, required: true },
  asociacion: { type: Array, required: true },
  dificultad: { type: String, required: true },
  siembra: {
    norte: {
      type: Array
    },
    sur: {
      type: Array
    }
  }
});

module.exports = mongoose.model('valuva', ValuvaSchema);
