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

            // working with predefined List

            List<int> details = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            int selectedItem = details.ElementAt(0); // fetching record stored at index 0
            //int selectedItem1 = details.ElementAt(13); // fetching record stored at index 13 wich is not available so will give run time error
            // due to above run time error e.g. IndexOutOfRange Exception we will use below approaches

            int selectedItem2 = details.ElementAtOrDefault(13);

            Console.WriteLine(selectedItem);
            Console.WriteLine(selectedItem2);
                            
            //working with user-defined list

                            IList<Student> studentList = new List<Student>() { 
                            new Student() { StudentID = 1, StudentName = "John", Age = 13} ,
                            new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
                            new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
                            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
                            new Student() { StudentID = 5, StudentName = "Ronika" , Age = 15 } 
                        };


                var SelectedStudent = studentList.ElementAt(0);
                var SelectedStudent1 = studentList.ElementAtOrDefault(8); // there is no any element at index 8 so will return default value null for object type
                Console.WriteLine("Student Name : " + SelectedStudent.StudentName);
                
                

            
        }
    }
}
