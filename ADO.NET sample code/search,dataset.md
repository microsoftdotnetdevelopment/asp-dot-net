<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">       
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br />
        <asp:Button ID="Button1" runat="server" Text="Button"  OnClick="Button1_Click1"  />        
        <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label><br />
        <asp:GridView ID="GridView1" runat="server"></asp:GridView>
</form>
</body>
</html>
-------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Label3.Visible = false;
    }
    protected void Button1_Click1(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data Source=SUNNY;Initial catalog=demo;Integrated security=true";
        string query = "select name  from shop where Name like'" + TextBox3.Text + "%'";
        con.Open();
        SqlCommand com = new SqlCommand(query, con);
        SqlDataReader dr;
      
        dr = com.ExecuteReader();
        if (dr.HasRows)
        {
            dr.Read();
            sear();
            GridView1.Visible = true;
            TextBox3.Text = "";
            Label3.Text = "";
        }
        else
        {
            GridView1.Visible = false;
            Label3.Visible = true;
            Label3.Text = "The search Term " + TextBox3.Text + " &nbsp;Is Not Available in the Records"; 
        }
    }
    public void sear()
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data Source=SUNNY;Initial catalog=demo;Integrated security=true";
        string query = "select * from shop where name like '" + TextBox3.Text + "%'";
        SqlDataAdapter da = new SqlDataAdapter(query, con);
        DataSet ds = new DataSet();
        da.Fill(ds);
        GridView1.DataSource = ds;
        GridView1.DataBind();
    }
}
