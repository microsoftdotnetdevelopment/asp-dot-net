1. Hidden field
it is rendered as an <input type=hidden">
Hidden field is a control provided by ASP.NET which is used to store small amounts of data on the client. 
It store one value for the variable and it is a preferable way when a variable's value is changed frequently. 
Hidden field control is not rendered to the client (browser) and it is invisible on the browser.

You can store page-specific information in a hidden field on your page as a way of maintaining the state of your page.

Disadvantage of HiddenField:
Hidden field data can be seen, by viewing the page source. Never, use HiddenFiled to store confidential data 
Ex:1-
 protected void Page_Load(object sender, EventArgs e)
    {       
            int val = Convert.ToInt32(HiddenField1.Value) + 1;
            HiddenField1.Value = val.ToString();
            Label1.Text = val.ToString();        
    }
.......
 <asp:HiddenField ID="HiddenField1" runat="server" Value="1" /><br />
        <asp:Label ID="Label1" runat="server" ></asp:Label><br />
        <asp:Button ID="Button1" runat="server" Text="Button"  OnClick="Button1_Click"  />
-------------------------------

Ex:2-
Create Table tblEmployees
(
 Id int Primary Key,
 Name nvarchar(50),
 Gender nvarchar(10),
 DeptName nvarchar(10)
)

Insert into tblEmployees values(201, 'Mark', 'Male', 'IT')
Insert into tblEmployees values(202, 'Steve', 'Male', 'Payroll')
Insert into tblEmployees values(203, 'John', 'Male', 'HR') 
.........
<asp:HiddenField ID="HiddenField1" runat="server" />
<table>
    <tr>
        <td>Name:</td>
        <td>
            <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
            </td>
    </tr>
    <tr>
        <td>Gender:</td>
        <td>
            <asp:TextBox ID="txtGender" runat="server"></asp:TextBox>
            </td>
    </tr>
    <tr>
        <td>Department:</td>
        <td>
            <asp:TextBox ID="txtDept" runat="server"></asp:TextBox>
            </td>
    </tr>
</table>
<asp:Button ID="Button1" runat="server" Text="Update Employee" 
    onclick="Button1_Click" />&nbsp;
<asp:Button ID="Button2" runat="server" onclick="Button2_Click" 
    Text="Load Employee" /> 
.............
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        LoadEmployee();
    }
}

private void LoadEmployee()
{
    string CS = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
    using (SqlConnection con = new SqlConnection(CS))
    {
        string sqlQuery = "Select Id, Name, Gender, DeptName from tblEmployees where Id=202";
        SqlCommand cmd = new SqlCommand(sqlQuery, con);
        con.Open();
        using (SqlDataReader rdr = cmd.ExecuteReader())
        {
            while (rdr.Read())
            {
                txtName.Text = rdr["Name"].ToString();
                txtGender.Text = rdr["Gender"].ToString();
                txtDept.Text = rdr["DeptName"].ToString();
                HiddenField1.Value = rdr["Id"].ToString();
            }
        }
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    string CS = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
    using (SqlConnection con = new SqlConnection(CS))
    {
        string sqlQuery = "Update tblEmployees set Name=@Name, Gender=@Gender, DeptName=@DeptName where Id=@Id";
        SqlCommand cmd = new SqlCommand(sqlQuery, con);
                
        cmd.Parameters.AddWithValue("@Name", txtName.Text);
        cmd.Parameters.AddWithValue("@Gender", txtGender.Text);
        cmd.Parameters.AddWithValue("@DeptName", txtDept.Text);
        cmd.Parameters.AddWithValue("@Id", HiddenField1.Value);
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();

        txtName.Text = "";
        txtDept.Text = "";
        txtGender.Text = "";
    }
}

protected void Button2_Click(object sender, EventArgs e)
{
    LoadEmployee();
}
..........
Advantages-
<script type="text/javascript">
    function GetHiddenFieldValue() 
    {
        alert(document.getElementById('HiddenField1').value);
    }
</script>
------------------------------------------------------------------------
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #Button1 {
            width: 93px;
        }
    </style>
    <script type="text/javascript">
        function changecolor() {
            form1.HiddenField1.value = form1.TextBox1.value;   
          document.getElementById("b1").style.backgroundColor = form1.HiddenField1.value;     
         }     
        function displaycolor() {        
        p1.innerHTML = "<h1> Present Color is  " + form1.HiddenField1.value + "</h1>";   
       }    
      </script>
</head>
<body id="b1">
    <form id="form1" runat="server">
        <div>BackGround Color&nbsp;       
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br />
            <br />
            <input id="Button1" type="button" value="Change Color " onclick="changecolor()" />
            <input id="Button2" type="button" value="Display Color" onclick="displaycolor()" />
            <br />
            <br />
        </div>
        <p id="p1"></p>
        <asp:HiddenField ID="HiddenField1" runat="server" />
    </form>
</body>
</html>

-----------------------------------------------------------------
Ex:4-
//example 1
int a = int.Parse(TextBox1.Text);
        int b = Convert.ToInt32(Label1.Text);
        b = b + a;
            Label1.Text = b.ToString();
//when viewstate is false
 int a = int.Parse(TextBox1.Text);
        int b = Convert.ToInt32(HiddenField1.Value);
        int c = b + a;
        HiddenField1.Value = c.ToString();
        Label1.Text = c.ToString();
