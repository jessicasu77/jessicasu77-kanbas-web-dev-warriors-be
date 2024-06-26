import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ["Multiple Choice", "Fill in the Blank", "True/False"],
    },
    points: Number,
    description: String,
    options: [String],
    answers: [String]
})

export default questionSchema;