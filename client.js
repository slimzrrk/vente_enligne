const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  nom: {
    type: String,
    required: true, // Champs obligatoires
  },
  description: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
