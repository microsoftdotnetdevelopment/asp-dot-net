using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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


            var studentlist = students.Where((s, i) => i%2==0); 
            // above (s,i) contains two parameters first s which denotes the object of Student class and other denotes the index of each elements starting from 0.
            // hence above code will return only those students which are at even index.
          
            Console.WriteLine("---------------List of selected Students------------");
            foreach (var s in studentlist)
                Console.WriteLine(s.StudentName);
 
        }
    }
}
