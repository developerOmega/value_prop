const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema ({
    first_name: {
        type: String,
        required: [true, 'El nombre es necesatio']
    },

    last_name: {
        type: String,
        required: [true, 'El apellido es necesario']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'El email el necesario']
    },

    password: {
        type: String,
        required: [true, 'La contrasenia en necesaria']
    },

    type: {
        type: String,
        default: 'USER_TYPE',
        enum: {
            values: ['ADMIN_TYPE', 'USER_TYPE'],
            message: '{VALUE} no es un type de usuario'
        }
    },

    status: {
        type: Boolean,
        default: true
    } 
});

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('User', userSchema);