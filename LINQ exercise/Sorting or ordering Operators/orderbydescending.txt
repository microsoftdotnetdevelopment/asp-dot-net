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


            var orderedlist = students.OrderByDescending(s => s.StudentAge);
          
            foreach (var s in orderedlist)
                Console.WriteLine(s.StudentAge);

           
        }
    }
}
