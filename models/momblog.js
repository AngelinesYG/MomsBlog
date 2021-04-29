const mongoose = require('mongoose');
const Schema = mongoose.Schema

const momblogSchema = new mongoose.Schema ({
   img: {type: String, required: false},
   title: {type: String, required: false},
   author: {type: String, required: false},
   blog: {type: String, required: false},
})

const Momblog = mongoose.model('Momblog', momblogSchema);

module.exports = Momblog
