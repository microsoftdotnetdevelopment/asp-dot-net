<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Label ID="Label1" runat="server" Text="Name"></asp:Label><br />
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label2" runat="server" Text="Age"></asp:Label><br />
        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label3" runat="server" Text="city"></asp:Label><br />
        <asp:DropDownList ID="DropDownList1" runat="server">
            <asp:ListItem>noida</asp:ListItem>
            <asp:ListItem>delhi</asp:ListItem>
            <asp:ListItem>greater noida</asp:ListItem>
            <asp:ListItem>gurgaon</asp:ListItem>
            <asp:ListItem>meerut</asp:ListItem>
        </asp:DropDownList><br />
        <asp:Button ID="Button1" runat="server" Text="Add" OnClick="Button1_Click"    />
    </div>
    </form>
</body>
</html>
.........
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data Source=SUNNY;Initial catalog=demo;Integrated security=true";
        string query = "insert student values(@name,@age,@city)";
        SqlCommand cmd = new SqlCommand(query, con);
        con.Open();
        cmd.Parameters.AddWithValue("@name", TextBox1.Text);
        cmd.Parameters.AddWithValue("@age", int.Parse(TextBox2.Text));
        cmd.Parameters.AddWithValue("@city", DropDownList1.SelectedItem.Text);
        cmd.ExecuteNonQuery();
        con.Close();
        Response.Write("success");

    }
}
---------------------------------
 <asp:Button ID="Button2" runat="server" Text="view" OnClick="Button2_Click"  />
        <asp:GridView ID="GridView1" runat="server"></asp:GridView>
...........
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=demo;Integrated security=true";
        string query = "select * from student";
        SqlCommand cmd = new SqlCommand(query, con);
        con.Open();
        GridView1.DataSource = cmd.ExecuteReader();
        GridView1.DataBind();
        con.Close();