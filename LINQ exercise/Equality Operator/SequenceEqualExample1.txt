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
            // SequenceEqual

            //The SequenceEqual method checks whether the number of elements and value of each element in two collection are equal or not.
            //If the collection contains elements of primitive data types then it compares the values and number of elements, whereas collection 
            //with complex type elements, checks the references of the objects. So, if the objects have the same reference then they considered as 
            //equal otherwise they are considered not equal.
           
                            
            //working with pre-defined list
            IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            IList<string> strList2 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            bool isEqual = strList1.SequenceEqual(strList2); // returns true
            Console.WriteLine(isEqual);

            
            //The SequenceEqual extension method checks the references of two objects to determine whether two sequences are equal or not. 
            //This may give wrong result. Consider following example:

            Student std = new Student() { StudentID = 1, StudentName = "Bill" };

            IList<Student> studentList1 = new List<Student>() { std };

            IList<Student> studentList2 = new List<Student>() { std };

            bool isStudentsEqual = studentList1.SequenceEqual(studentList2); // returns true
            Console.WriteLine(isStudentsEqual);

            Student std1 = new Student() { StudentID = 1, StudentName = "Bill" };
            IList<Student> stdList1 = new List<Student>() { std1 };

            Student std2 = new Student() { StudentID = 1, StudentName = "Bill" };
            IList<Student> stdList2 = new List<Student>() { std2 };

            bool isStudentsEquals = stdList1.SequenceEqual(stdList2);// returns false
            Console.WriteLine(isStudentsEquals);
           

        }
    }
}
