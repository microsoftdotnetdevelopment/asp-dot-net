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
	static void Main(string[] args)
        {
          
            List<int> list = new List<int>();
            list.Add(3);
            list.Add(21);
            list.Add(14);
            list.Add(27);
            list.Add(28);
            list.Add(11);

            var orderedlist = list.OrderBy(s => s);

            foreach (var i in orderedlist)
                Console.WriteLine(i);

           
        }
    }
}
