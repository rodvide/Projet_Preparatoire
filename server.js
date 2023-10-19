//imports
import express from "express";
import coursesDB from ".\domain\courses\courses.js";

//variables
const app = express();
const PORT = 3000;

//Main Page
app.get("/", (req, res) => {
  res.send("The server is running");
});

//Courses
app.get("/courses", (req, res) => {
  res.send();
});

app.get("/courses/:courseId", (req, res) => {
    res.send(req.params);
  });

app.post("/courses/add", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });

app.delete("/courses/delete", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });

//Students


//Applications
app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server has successfully started, and the application is listening on port " + PORT)
        console.log("Use link -> localhost:" + PORT)
    }
    else
        console.log("An error has occured during startup", error)
});