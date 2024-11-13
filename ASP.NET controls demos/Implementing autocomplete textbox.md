In this video, we will discuss implementing auto-complete functionality in an asp.net web forms application using jQuery Autocomplete Widget and a web service. 
 



Step 1: We will be using tblStudents table in this demo. Please find the sql script below, to create and populate this table with some data.
Create Table tblStudents
(
 ID int identity primary key,
 Name nvarchar(50),
 Gender nvarchar(20),
 TotalMarks int
)

Insert into tblStudents values('Mark Hastings','Male',900)
Insert into tblStudents values('Pam Nicholas','Female',760)
Insert into tblStudents values('John Stenson','Male',980)
Insert into tblStudents values('Ram Gerald','Male',990)
Insert into tblStudents values('Ron Simpson','Male',440)
Insert into tblStudents values('Able Wicht','Male',320)
Insert into tblStudents values('Steve Thompson','Male',983)
Insert into tblStudents values('James Bynes','Male',720)
Insert into tblStudents values('Mary Ward','Female',870)
Insert into tblStudents values('Nick Niron','Male',680)

Step 2: Download autocomplete widget from http://jqueryui.com/download. The following folders and files will be downloded.
 

Step 3: Open "js" folder copy "jquery-1.9.1.js" and "jquery-ui-1.10.3.custom.min.js" files and paste them in the "Scripts" folder of your asp.net project. Now open "css" folder. This folder will be present in "ui-lightness" folder. Copy "images" folder and "jquery-ui-1.10.3.custom.min.css" file and paste them in "Styles" folder in your asp.net project. If you are following along, at this point your solution explorer should look as shown below. 
 

Step 4: Right click on the project name in "Solution Explorer" and add a Web Service with name = StudentService.asmx. Copy and paste the following code. This web service is responsible for retrieving matching student names to implement auto-complete when the user types the name of the student in the textbox.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebFormsDemo
{
   
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {
        [WebMethod]
        public List<string> GetStudentNames(string searchTerm)
        {
            List<string> studentNames = new List<string>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spGetStudentNames", con);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlParameter parameter = new SqlParameter("@searchTerm", searchTerm);
                cmd.Parameters.Add(parameter);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    studentNames.Add(rdr["Name"].ToString());
                }
            }

            return studentNames;
        }
    }
}

Step 5: Copy and paste the following code in WebForm1.aspx
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/jquery-1.9.1.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
    <link href="Styles/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" language="javascript">
        $(function () {
            $('#<%= txtStudentName.ClientID %>').autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: "StudentService.asmx/GetStudentNames",
                        data: "{ 'searchTerm': '" + request.term + "' }",
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json;charset=utf-8",
                        success: function (data) {
                            response(data.d);
                        },
                        error: function (result) {
                            alert('There is a problem processing your request');
                        }
                    });
                },
                minLength: 0
            });
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div style="font-family:Arial">
        <asp:TextBox ID="txtStudentName" runat="server">
        </asp:TextBox>
        <asp:Button ID="Button1" runat="server" Text="Button"
            onclick="Button1_Click" />
        <br />
        <asp:GridView ID="gvStudents" runat="server">
        </asp:GridView>
    </div>
    </form>
</body>
</html>

Step 6: Copy and paste the following code in WebForm1.aspx.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebFormsDemo
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                GetStudents(null);
            }
        }

        private void GetStudents(string studentName)
        {
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spGetStudents", con);
                cmd.CommandType = CommandType.StoredProcedure;

                if (!string.IsNullOrEmpty(studentName))
                {
                    SqlParameter parameter = new SqlParameter("@EmployeeName", studentName);
                    cmd.Parameters.Add(parameter);
                }
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                gvStudents.DataSource = rdr;
                gvStudents.DataBind();
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            GetStudents(txtStudentName.Text);
        }
    }
} 
