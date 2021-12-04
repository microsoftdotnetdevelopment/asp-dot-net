using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqExamples
{
    class Student
    {

        static void Main(string[] args)
        {
          
            string[] students = { "Deepa", null, "Rohit", "", "Sumit", null,"Amit" };
            var stud = students.Where(s => s != null);

            Console.WriteLine("Displaying Not null names ");
            foreach (var s in stud)
                Console.WriteLine(s);

            // above programs only filters the nulls and displays only not null values...

            Console.WriteLine("Displaying Not null and not empty names ");
            var studd = students.Where(s => !string.IsNullOrEmpty(s));
            foreach (var s in studd)
                Console.WriteLine(s);
        }
    }
}
