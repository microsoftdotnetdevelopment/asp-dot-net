using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace LinqExamples
{
    
  
    class myclass
    {
        static void Main(string[] args)
        {

	    List<string> flowers = new List<string>() { "Sun flower", "Rose flower" , "tulip flower" };
            var result = flowers.Select(f => f.Split(' ').First());
            foreach (string s in result)
                Console.WriteLine(s);
            
        }
    }
}
