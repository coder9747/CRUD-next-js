import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    title: String,
    description: String,
}, { timestamps: true });


const ToDoModel = mongoose.models.todo || mongoose.model('todo', ToDoSchema);



export default ToDoModel;