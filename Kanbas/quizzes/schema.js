import mongoose from "mongoose";
import questionSchema from "./question/schema.js";
const quizSchema = new mongoose.Schema({
    _id: String,
    isPublished: { type: Boolean, required: true },
    courseId: { type: String, required: true },
    questions: [questionSchema],
    title: { type: String, required: true },
    description: String,
    type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",},
    points: Number,
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: Date,
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date
    },
  { collection: "quizzes" });
export default quizSchema;