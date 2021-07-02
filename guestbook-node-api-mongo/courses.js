const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Entry = require("./models/course_schema");

mongoose
  .connect(
    "mongodb://localhost:27017/Courses-DB"
  )
  .then(() => {
    console.log("Connected to database!");
   
  })
  .catch(() => {
    console.log("Connection failed!");
  });


const app = express();
app.use(cors());
app.use(express.json());

// Add Courses
app.post("/addcourses", (req, res) => 
{
  console.log(req.body);

  if (!req.body.name || !req.body.message || !req.body.date)
  {
    return res.status(400).end();
  }

  const course = new Courses(
  {
    course_id: req.body.id,
    course_name: req.body.name,
    course_intro: req.body.intro,
    course_instructor_intro: req.body.instrintro,
    course_outline: req.body.outline,
    course_prereq: req.body.prereq,
    no_of_lectures: req.body.nooflect,
    no_of_hours: req.body.noofhours,
    no_of_quizes: req.body.noofquizes,
    no_of_exercises: req.body.noofexercises,
    course_price: req.body.price,
    discount_on_course: req.body.discount,
    date_added: req.body.date,
    course_rating: req.body.rating,
    student_enrolled_in_course: req.body.studentsenrolled,
    course_lang: req.body.lang,
    course_level: req.body.level,
    topic: req.body.topic,
  });

  course.save();

  console.log("== Entry Added Successfully ==");

  res.json(entry);
});

// NodeJS Code
const port = parseInt(process.env.PORT || "7100");
app.listen(port, () => console.log(`Listening on port ${port}`));
