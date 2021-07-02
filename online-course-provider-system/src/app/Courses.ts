export class MERN_Stack_Courses
{
  constructor(public course_id: string, public course_name: string, public course_intro: string,
    public course_instructor_intro: string, public course_outline: string, public course_prereq: string,
    public no_of_lectures: number, public no_of_hours: number, 
    public no_of_quizes: number, public no_of_exercises: number,
    public course_price: number, public discount_on_course: number,
    public date_added: Date, public course_rating: string,
    public student_enrolled_in_course: number, public course_lang: string,
    public course_level: string, public topic: string
    )
  {
    
  }
}