using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    
   

   public class student
    {
        public int ID { get; set; }
        public string Name { get; set; }

    }

    // Creatin Class for Contains method to be used with User defined data types , to know more read the end of the program

    public  class studentcheck : IEqualityComparer<student>
    {
        public  bool Equals(student x, student y)
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
            student stu = new student(){ ID=10, Name="Deepak"};
            student stu1 = new student() { ID = 10, Name = "Deepak" };
            if (new studentcheck().Equals(stu,stu1))
                Console.WriteLine("Equals");
            else
                Console.WriteLine("Not Equals");
        }
           
            
        
    }
}
