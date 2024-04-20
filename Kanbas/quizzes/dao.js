import quizModel from "./model.js";
export const findAllQuizzes = () => quizModel.find();
export const findQuizById = (id) => quizModel.findById(id);
export const deleteQuizById = (id) => quizModel.findByIdAndDelete(id);
export const updateQuizById = (id, quiz) => quizModel.updateOne({ _id: id }, { $set: quiz });
export const createQuiz = (quiz) => quizModel.create(quiz);
export const findQuizzesByCourseId = (courseId) => quizModel.find({courseId: courseId});