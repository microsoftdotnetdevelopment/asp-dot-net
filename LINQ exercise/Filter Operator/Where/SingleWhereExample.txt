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
           
            string[] words = { "humpty", "dumpty", "set", "on", "a", "wall" };

            IEnumerable<string> query = words.Where(w => w.Length > 3);
            foreach (string str in query)
                Console.WriteLine(str);
            Console.ReadLine();  
        }
    }
}
