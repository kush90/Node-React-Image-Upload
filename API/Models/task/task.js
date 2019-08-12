const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    img:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        required:true,
        trim:true,
        default:"pending"
    }
});
const Task = mongoose.model('Task',TaskSchema,'Task');
module.exports = Task;