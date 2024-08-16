const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
},{
    timestamps: true
})

taskSchema.pre('save',async function (next) { //hooks or middleware
    const task = this

    console.log('Running before saving')

    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task