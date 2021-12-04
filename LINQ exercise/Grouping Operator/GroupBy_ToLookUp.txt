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
            students.Add(new Student { StudentID = 103, StudentName = "Sumit", StudentAge = 19 });
            students.Add(new Student { StudentID = 104, StudentName = "Rohit", StudentAge = 16 });
            students.Add(new Student { StudentID = 105, StudentName = "Amit", StudentAge = 19 });
            students.Add(new Student { StudentID=106, StudentName="Manju", StudentAge=21 });
            students.Add(new Student { StudentID = 107, StudentName = "Anamika", StudentAge = 21 });


            //You can use either GroupBy & ToLookup to return a collection that has a key and an inner collection based on a key field value.
            //The execution of GroupBy is deferred whereas that of ToLookup is immediate.

            var groupedlist1 = students.GroupBy(s => s.StudentAge);
            var groupedlist2 = students.ToLookup(s => s.StudentAge);

            foreach (var group in groupedlist2)
            {
                Console.WriteLine("Students having Age : " + group.Key);
                Console.WriteLine("------------------------------------");
                foreach (var s in group)
                    Console.WriteLine("Name : " + s.StudentName + " Age :  " + s.StudentAge);
                Console.WriteLine("-----------------------------------------------------");
            }
        }
    }
}
