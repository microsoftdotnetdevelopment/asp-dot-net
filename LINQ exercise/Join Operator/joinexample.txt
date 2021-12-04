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


            var joinresult = students.Join(
                                teachers,
                                student => student.TeacherID, // mentioning common property in Students
                                teacher => teacher.TeacherID, // mentioning common property in Teachers
                                (student, teacher) => new // projection to mention what to show 
                                                       {
                                                          StuName = student.StudentName, // setting projection to show Student Name
                                                          TeachName = teacher.TeacherName // setting projection to show Teacher Name // similarly you can show others also..
                                                       });

            //displaying all results 
            foreach (var res in joinresult)
            {
                Console.WriteLine("Stundent Name : " + res.StuName + " is under teacher " + res.TeachName);
            }
            

            
        }
    }
}
