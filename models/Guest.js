const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const adminSchema = new  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: String,
    phone: String,
    friendOf: String,
    message: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Guest', adminSchema);