import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import CourseRoutes from './Kanbas/courses/routes.js';
import QuizzesRoutes from './Kanbas/quizzes/routes.js';
import cors from 'cors';
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
QuizzesRoutes(app);
app.listen(process.env.PORT || 4000);
