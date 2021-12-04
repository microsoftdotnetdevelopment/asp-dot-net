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
            students.Add(new Student { StudentID=101, StudentName="Deepak", StudentAge=17 });
            students.Add(new Student { StudentID = 102, StudentName = "Abhay", StudentAge = 16 });
            students.Add(new Student { StudentID = 103, StudentName = "Sumit", StudentAge = 20 });
            students.Add(new Student { StudentID = 104, StudentName = "Rohit", StudentAge = 23 });

            //first way 
            Func<Student, bool> teenager = s => s.StudentAge > 18;
            var teenagers = students.Where(teenager);

            //second way
            var studentlist = students.Where(s=>s.StudentID<=103); // here we will pass the lambda statement directly as the parameter to where method..

            Console.WriteLine("---------------List of Teenagers-----------------");
            foreach (var s in teenagers)
                Console.WriteLine(s.StudentName);


            Console.WriteLine("---------------List of selected Students------------");
            foreach (var s in studentlist)
                Console.WriteLine(s.StudentName);
 
        }
    }
}
