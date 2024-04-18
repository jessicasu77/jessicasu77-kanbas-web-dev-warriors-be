import * as dao from "./dao.js";
function CourseRoutes(app) {
    app.post("/api/courses", async (req, res) => {
    const course = { ...req.body,
      // _id: new Date().getTime().toString()
    };
    await dao.createCourse(course);
    res.send(course);
    });

    app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourseById(id);
    res.sendStatus(204);
    });

    app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
    });

    app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
    });


    app.get("/api/courses", async (req, res) => {
      const courses = await dao.findAllCourses();
      res.send(courses);
    });
}

export default CourseRoutes