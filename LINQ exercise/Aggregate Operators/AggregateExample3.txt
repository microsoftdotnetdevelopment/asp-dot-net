using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    
    class myclass
    {
        static void Main(string[] args)
        {

            int[] num = { 1, 3, 4, 5, 6, 7, 8 };
            int total = num.Aggregate((a, b) => a + b);
            Console.WriteLine(total);
          
        }
    }
}
