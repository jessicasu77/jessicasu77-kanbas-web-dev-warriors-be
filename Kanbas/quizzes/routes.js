import * as dao from "./dao.js";
function QuizzesRoutes(app) {
    app.get("/api/quizzes", async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.send(quizzes);
    });
    app.get("/api/quizzes/:id", async (req, res) => {
        const { id } = req.params;
        const quiz = await dao.findQuizById(id);
        if (!quiz) {
            res.status(404).send("Quiz not found");
            return;
        }
        res.send(quiz);
    });
     app.get("/api/quizzes/course/:id", async (req, res) => {
        const { id } = req.params;
        const quizzes = await dao.findQuizzesByCourseId(id);
        res.send(quizzes);
    });
    app.delete("/api/quizzes/:id", async (req, res) => {
        const { id } = req.params;
        await dao.deleteQuizById(id);
        res.sendStatus(200);
    });
    app.put("/api/quizzes/:id", async (req, res) => {
        const { id } = req.params;
        const quiz = req.body;
        await dao.updateQuizById(id, quiz);
        res.sendStatus(204);
    });
    // publish or unpublish quiz
    app.put("/api/quizzes/:id/publish", async (req, res) => {
        const { id } = req.params;
        const quiz = await dao.findQuizById(id);
        if (!quiz) {
            res.status(404).send("Quiz not found");
            return;
        }
        quiz.isPublished = !quiz.isPublished;
        await dao.updateQuizById(id, quiz);
        res.sendStatus(204);
    });
    app.post("/api/quizzes", async (req, res) => {
        const quiz = {
            ...req.body
        };
        await dao.createQuiz(quiz);
        res.send(quiz);
    });
}

export default QuizzesRoutes;