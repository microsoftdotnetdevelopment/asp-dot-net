Example1-
 <asp:Label ID="Label1" runat="server" Text="sid"></asp:Label><br />
        <asp:DropDownList ID="DropDownList1" runat="server"  ></asp:DropDownList><br />
        <asp:Label ID="Label2" runat="server" Text="name"></asp:Label><br />
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label3" runat="server" Text="Age"></asp:Label><br />
        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label4" runat="server" Text="City"></asp:Label><br />
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br />
        <asp:Button ID="Button1" runat="server" Text="Button" /> 
.................
 SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=demo;Integrated security=true";       
        string query = "select id from student";
        SqlCommand cmd = new SqlCommand(query, con);
        con.Open();
        SqlDataReader dr = cmd.ExecuteReader();
        while (dr.Read())
        {
            DropDownList1.Items.Add(dr[0].ToString());
        }
        con.Close();
-------------------------------------------------------------------
 SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=demo;Integrated security=true";       
        string query = "select id,name from student";
        SqlCommand cmd = new SqlCommand(query, con);
        con.Open();
        SqlDataReader dr = cmd.ExecuteReader();
        while (dr.Read())
        {
            DropDownList1.Items.Add(new ListItem(dr[1].ToString(),dr[0].ToString()));
        }
        con.Close();
------------------
Example2-
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
     <asp:Label ID="Label1" runat="server" Text="sid"></asp:Label><br />
        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged" ></asp:DropDownList><br />
        <asp:Label ID="Label2" runat="server" Text="name"></asp:Label><br />
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label3" runat="server" Text="Age"></asp:Label><br />
        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label4" runat="server" Text="City"></asp:Label><br />
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br />
       
    </div>
    </form>
</body>
</html>

....................
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=demo;Integrated security=true";
       
        string query = "select id,name from student";
        SqlCommand cmd = new SqlCommand(query, con);
        con.Open();
        SqlDataReader dr = cmd.ExecuteReader();
        while (dr.Read())
        {
            DropDownList1.Items.Add(new ListItem(dr[1].ToString(),dr[0].ToString()));
        }
        con.Close();
        
    }

    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data Source=SUNNY;Initial catalog=demo;Integrated security=true";
        string query = "select * from student where id=@id";
        SqlCommand cmd = new SqlCommand(query, con);       
        cmd.Parameters.AddWithValue("@id",int.Parse(DropDownList1.SelectedItem.Value));
        con.Open();
        SqlDataReader dr = cmd.ExecuteReader();      
        dr.Read();
        TextBox1.Text = dr[1].ToString();
        TextBox2.Text = dr[2].ToString();
        TextBox3.Text = dr[3].ToString();
        con.Close();
    }
}
----------------------------------------------------------
 <asp:DropDownList id=DropDown1 runat="server">
            <asp:ListItem>Item 1</asp:ListItem>
            <asp:ListItem>Item 2</asp:ListItem>
            <asp:ListItem>Item 3</asp:ListItem>
            <asp:ListItem>Item 4</asp:ListItem>
            <asp:ListItem>Item 5</asp:ListItem>
            <asp:ListItem>Item 6</asp:ListItem>
        </asp:DropDownList>

        <asp:button text="Submit" OnClick="SubmitBtn_Click" runat=server/>

        <p>
        
        <asp:Label id=Label1 Font-Names="Verdana" font-size="10pt" runat="server">
          Select a value from the list
        </asp:Label>
................
    protected void Button1_Click1(object sender, EventArgs e)
    {
        Label1.Text = "You chose: " + ddl.SelectedItem.Text;
    }

-------------------------------------------------------------
by using arraylist- 
<asp:DropDownList ID="DropDownList1" runat="server"></asp:DropDownList>

        <asp:Button ID="Button1" runat="server" Text="Button"  OnClick="Button1_Click1"  />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
..............
 protected void Page_Load(object sender, EventArgs e)
    {
        ArrayList values = new ArrayList();
        values.Add("IN");
        values.Add("KS");
        values.Add("MD");
        values.Add("MI");
        values.Add("OR");
        values.Add("TN");
        DropDownList1.DataSource = values;
        DropDownList1.DataBind();
    }
 protected void Button1_Click1(object sender, EventArgs e)
    {
        Label1.Text = "You chose: " + ddl.SelectedItem.Text;
    }
-----------------------------------------------------------
 <asp:DropDownList ID="DropDownList1" runat="server">
            <asp:ListItem Value="1">male</asp:ListItem>
            <asp:ListItem Value="2">female</asp:ListItem>
            <asp:ListItem Value="3">others</asp:ListItem>
        </asp:DropDownList>

        <asp:Button ID="Button1" runat="server" Text="Button"  OnClick="Button1_Click1"  />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
.............

    protected void Button1_Click1(object sender, EventArgs e)
    {
        Label1.Text = "You chose: " + DropDownList1.SelectedValue;
    }

