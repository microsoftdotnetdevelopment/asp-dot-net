using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    
   

    class student
    {
        public int ID { get; set; }
        public string Name { get; set; }

    }

    // Creatin Class for Contains method to be used with User defined data types , to know more read the end of the program

    class studentcheck : IEqualityComparer<student>
    {
        public bool Equals(student x, student y)
        {

            if (x.ID == y.ID && x.Name == y.Name)
                return true;

            return false;
        }

        public int GetHashCode(student obj)
        {
            return obj.GetHashCode();
        }

    }

    class Program
    {
       
        public static void Main()
        {
            List<string> employee = new List<string>() { "Amit","Sumit","Deepak","Sunil","Rohit"};
            //for list of predefined items
            bool result1 = employee.All(e => e.Length > 5);
            bool result2 = employee.Any(e => e.Length > 5);
            bool result3 = employee.Contains("Amit");
            Console.WriteLine("-----------------------------------PreDefined----------------------------");
            Console.WriteLine(result1);
            Console.WriteLine(result2);
            Console.WriteLine(result3);

            //The above example works well with primitive data types. However, it will not work with a custom class. Consider the following example:
            //for list of userdefined items..
            
            List<student> students = new List<student>() { new student{ ID=10, Name="Deepak"}, new student{ ID=12, Name="sumit"}, new student{ ID=15, Name="Abhay"} };

            bool res1 = students.All(s => s.Name.Length >= 5);
            bool res2 = students.Any(s => s.Name.Length > 5);


            bool res3 = students.Contains(new student { ID=10, Name="Deepak" });

            Console.WriteLine("-----------------------------------UserDefined----------------------------");
            Console.WriteLine(res1);
            Console.WriteLine(res2);
            Console.WriteLine(res3);

            /*
             As you can see in the above example, Contains returns false even if "Deepak" exists in the studentList. 
             * This is because the Contains extension method only compares reference of an object but not the actual values of an object. 
             * So to compare values of the student object, you need to create a class by implementing IEqualityComparer interface, 
             * that compares values of two Student objects and returns boolean. 
             */

            // see the improved answer below

            bool res4 = students.Contains(new student{ ID=10, Name="Deepak"}, new studentcheck());
            Console.WriteLine(res4);
        }
           
            
        
    }
}
