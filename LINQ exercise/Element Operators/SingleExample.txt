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



                            /* Single : Returns the only element from a collection, or the only element that satisfies a condition.
                             * If Single() found no elements or more than one elements in the collection then throws InvalidOperationException.
                             */
                            var SelectedStudent1 = studentList.Single(s => s.Age > 20); // as per the condition it will found only one record
                           
                            Console.WriteLine("Student older than 20 : " + SelectedStudent1.StudentName);


                            //var SelectedStudent2 = studentList.Single(s => s.Age > 21); // error as there is not student having age more than 21
                            //Console.WriteLine("First Student older than 21 : " + SelectedStudent2.StudentName);

                            //below is the alternate way for overcoming error

                            var selectedstud = studentList.SingleOrDefault(s => s.Age > 21);
                            if(ReferenceEquals(selectedstud,null))
                                Console.WriteLine("No Data Found");
                            else
                            Console.WriteLine(selectedstud.StudentName); 
        }
    }
}
