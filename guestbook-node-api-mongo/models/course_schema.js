const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  course_id: { type: String},
  course_name: { type: String},
  course_intro: { type: String},
  course_instructor_intro: { type: String},
  course_outline: { type: String},
  course_prereq: { type: String},
  no_of_lectures: { type: Number},
  no_of_hours: { type: Number},
  no_of_quizes: { type: Number},
  no_of_exercises: { type: Number},
  course_price: { type: Number},
  discount_on_course: { type: Number},
  date_added: { type: Date},
  course_rating: { type: String},
  student_enrolled_in_course: { type: Number},
  course_lang: { type: String},
  course_level: { type: String},
  topic: {type: String}
});

module.exports = mongoose.model('Courses', courseSchema);