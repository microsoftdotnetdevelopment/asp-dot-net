using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Student 
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }


    }
    class myclass
    {
        static void Main(string[] args)
        {

           
                            
            //working with user-defined list

                            IList<Student> studentList = new List<Student>() { 
                            new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
                            new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
                            new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
                            new Student() { StudentID = 5, StudentName = "Ronika" , Age = 15 } 
                        };


                            var SelectedStudent = studentList.Last();
                            var SelectedStudent1 = studentList.Last( s => s.Age > 17); 
                            Console.WriteLine("First Student Name : " + SelectedStudent.StudentName);
                            Console.WriteLine("First Student older than 20 : " + SelectedStudent1.StudentName);


                            //var SelectedStudent2 = studentList.Last(s => s.Age > 21); // error as there is not student having age more than 21
                            //Console.WriteLine("First Student older than 21 : " + SelectedStudent2.StudentName);

                            // below is the alternative for above error by replacing Last() to LastOrDefault like below

                            var SelectedStudent3 = studentList.LastOrDefault(s => s.Age > 21);
                            if (SelectedStudent3 != null)
                                Console.WriteLine("First Student older than 21 : " + SelectedStudent3.StudentName);
                            else
                                Console.WriteLine("There is no such recored found");
        }
    }
}
