//imports
import express from "express";
import bodyParser from "body-parser";
import { getCourses, addCourse, removeCourse } from "./domain/courses/courses.js";
import { getStudents, addStudent } from "./domain/students/students.js";

//variables
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());


//Main Page
app.get("/", (req, res) => {
  res.send("The server is running");
});


//Courses
app.get("/courses", (req, res) => {
  res.send(
    /*[
      {
        nom: "Architecture web",
        id: 1,
      },
      {
        nom: "Construction de kayaks en papier",
        id: 2,
      },
    ]*/
    getCourses()
  );
});

app.get("/courses/:courseId", (req, res) => {
    res.send(getCourses(req.params));
  });

app.post("/courses/add", (req, res) => {
    addCourse(req.body.nom);
    console.log(req.body);
    res.sendStatus(200);
  });

app.put("/courses/update/:courseId", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });


//Students
app.get("/students", (req, res) => {
    res.send();
  });

app.get("/students/:studentId", (req, res) => {
    res.send();
  });


app.post("/students/add", (req, res) => {
    res.send();
  });


//Applications
app.post("/subscriptions/add/:studentId/:courseId", (req, res) => {
    res.send();
  });

app.delete("/subscriptions/remove/:studentId/:courseId", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });
*/
//Listen
app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server has successfully started, and the application is listening on port " + PORT)
        console.log("Use link -> localhost:" + PORT)
    }
    else
        console.log("An error has occured during startup", error)
});