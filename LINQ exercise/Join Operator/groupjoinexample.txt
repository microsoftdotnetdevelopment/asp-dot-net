using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace LinqExamples
{
    class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int StudentAge { get; set; }
        public int TeacherID { get; set; }
    }
    class Teacher
    {
        public int TeacherID { get; set;}
        public string TeacherName {get;set;}
    }
    class myclass
    {
        static void Main(string[] args)
        {
            IList<Student> students = new List<Student>();
            students.Add(new Student { StudentID=101, StudentName="Deepak", StudentAge=19 , TeacherID=10 });
            students.Add(new Student { StudentID = 102, StudentName = "Abhay", StudentAge = 16, TeacherID = 11 });
            students.Add(new Student { StudentID = 103, StudentName = "Sumit", StudentAge = 19, TeacherID = 12 });
            students.Add(new Student { StudentID = 104, StudentName = "Rohit", StudentAge = 16, TeacherID = 11 });
            students.Add(new Student { StudentID = 105, StudentName = "Amit", StudentAge = 19, TeacherID = 10 });
            students.Add(new Student { StudentID=106, StudentName="Manju", StudentAge=21 , TeacherID = 11 });
            students.Add(new Student { StudentID = 107, StudentName = "Anamika", StudentAge = 21 , TeacherID = 12 });

            IList<Teacher> teachers = new List<Teacher>();
            teachers.Add(new Teacher { TeacherID=10, TeacherName = "Sushmita" });
            teachers.Add(new Teacher { TeacherID = 11, TeacherName = "Katrina" });
            teachers.Add(new Teacher { TeacherID = 12, TeacherName = "Ritika" });

            // here we are grouping and joining the records of teachers with students.
            var joinresult = teachers.GroupJoin(
                                students,
                                student => student.TeacherID, // mentioning common property in Students
                                teacher => teacher.TeacherID, // mentioning common property in Teachers
                                (teacherdetails, studentgroup) => new // first parameter contains the records of treachers , second parameter cotains the group of students on the basis of teacherid
                                                       {
                                                          Students = studentgroup,
                                                          teacher = teacherdetails.TeacherName
                                                       });

            //displaying all results 
            foreach (var res in joinresult)
            {
                Console.WriteLine("Teacher Name : " + res.teacher);
                Console.WriteLine("---------List of Students coming under above teacher-------------");
                foreach(var s in res.Students)
                Console.WriteLine("Stundent Name : "  + s.StudentName);
            }
            

            
        }
    }
}
