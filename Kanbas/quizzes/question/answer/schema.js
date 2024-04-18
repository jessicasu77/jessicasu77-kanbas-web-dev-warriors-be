import mongoose from mongoose;
const answerSchema = new mongoose.Schema({
    answer: { type: String, required: true },
    correct: { type: Boolean, required: true },
})