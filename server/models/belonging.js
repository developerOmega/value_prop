const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

let belongingSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },

    value: {
        type: Number,
        required: [true, 'El valor es necesario'],
        default: 0
    },

    quantity: {
        type: Number,
        required: [true, 'La cantidad es necesaria'],
        default: 1
    },

    active: {
        type: Boolean,
        default: false
    },

    value_active: {
        type: Number,
        default: 0
    }, 

    user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Belonging', belongingSchema);