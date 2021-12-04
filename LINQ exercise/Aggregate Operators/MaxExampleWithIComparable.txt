using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Student : IComparable<Student>
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }


        // Note : // IF we run this program without implementing and using the below method then we get the below error
        //At least one object must implement IComparable because studentlist holds the list of instances of Student class..
                              
        public int CompareTo(Student s)
        {
            if (this.StudentName.Length > s.StudentName.Length)
                return 1;
            return 0;
        }
    }
    class myclass
    {
        static void Main(string[] args)
        {

                            IList<Student> studentList = new List<Student>() { 
                            new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
                            new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
                            new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
                            new Student() { StudentID = 5, StudentName = "Ronika" , Age = 15 } 
                        };


                               var student = studentList.Max();

                               Console.WriteLine("Student Name : " + student.StudentName);
        }
    }
}
