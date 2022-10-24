const monogoose = require('mongoose')

let noteModel = monogoose.Schema({
    user: {
        type: monogoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    title: {
        type: String,
    },

    content: {
        type: String
    }

}, {
    timestamps:true
})

let note = monogoose.model('Note', noteModel)

module.exports = note