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
        
        static void Main(string[] args)
        {
            IList<Student> students = new List<Student>();
            students.Add(new Student { StudentID=101, StudentName="Deepak", StudentAge=19 });
            students.Add(new Student { StudentID = 102, StudentName = "Abhay", StudentAge = 16 });
            students.Add(new Student { StudentID = 103, StudentName = "Sumit", StudentAge = 20 });
            students.Add(new Student { StudentID = 104, StudentName = "Rohit", StudentAge = 23 });
            students.Add(new Student { StudentID = 105, StudentName = "Deepak", StudentAge = 29 });


            // You can do any of below mixing ....

            var orderedlist1 = students.OrderByDescending(s => s.StudentName).ThenByDescending(s => s.StudentAge);
            //var orderedlist2 = students.OrderBy(s => s.StudentName).ThenByDescending(s => s.StudentAge);
            //var orderedlist3 = students.OrderByDescending(s => s.StudentName).ThenBy(s => s.StudentAge);
            //var orderedlist4 = students.OrderBy(s => s.StudentName).ThenBy(s => s.StudentAge);
          
          
            foreach (var s in orderedlist1)
                Console.WriteLine("Name : " + s.StudentName + " Age :  " + s.StudentAge);

           
        }
    }
}
