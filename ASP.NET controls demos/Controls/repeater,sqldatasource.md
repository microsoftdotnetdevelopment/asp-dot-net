 <form runat="server">
    <div>
        <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
            <ItemTemplate>
                <%# DataBinder.Eval(Container.DataItem, "pid")%> &nbsp;&nbsp;
			<%# DataBinder.Eval(Container.DataItem, "pname")%> <br />
            </ItemTemplate>
        </asp:Repeater>

       
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>"
             SelectCommand="select pid,pname from nttdata" >
           </asp:SqlDataSource>
------------------------------------------------------------------------
Formatting the data-
<form runat="server">
    <div>
        <asp:Repeater ID="Repeater1" runat="server" DataSourceID="SqlDataSource1">
            <HeaderTemplate>
		<b><u>HEADER TEXT HERE</u></b><hr>
		</HeaderTemplate>
            <ItemTemplate>
                <%# DataBinder.Eval(Container.DataItem, "pid")%> &nbsp;&nbsp;
			<%# DataBinder.Eval(Container.DataItem, "pname")%> <br />
            </ItemTemplate>
            <SeparatorTemplate>
		<hr>
		</SeparatorTemplate>
		<FooterTemplate>
		<hr><b><u>FOOTER TEXT HERE</u></b>
		</FooterTemplate>
        </asp:Repeater>

       
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>"
             SelectCommand="select pid,pname from nttdata" >
          
        </asp:SqlDataSource>
--------------------------------------------------------------------------------------------------
Include xml file-
website.xml-
<?xml version="1.0" encoding="utf-8" ?>
<Table>
  <websites>
    <website_logo>http://net-informations.com/logo.png</website_logo>
    <website_name>http://net-informations.com</website_name>
  </websites>
  <websites>
    <website_logo>http://net-informations.com/logo.png</website_logo>
    <website_name>http://vb.net-informations.com</website_name>
  </websites>
  <websites>
    <website_logo>http://net-informations.com/logo.png</website_logo>
    <website_name>http://csharp.net-informations.com</website_name>
  </websites>
  <websites>
    <website_logo>http://net-informations.com/logo.png</website_logo>
    <website_name>http://asp.net-informations.com</website_name>
  </websites>
</Table>
..........
default.aspx
<form runat="server">
    <div>
      <asp:Repeater id="repeater1" runat="server" >
		<HeaderTemplate>
		<table border="2">
		<tr><td colspan ="2"><b><u>Website Listing</u></b><br /></td></tr>
		</HeaderTemplate>
		<ItemTemplate>
		<tr><td>
		<asp:Image ID="Image1" height="31" width="127"
		Img src='_.html# DataBinder.Eval(Container.DataItem, "website_logo")%>' runat="server"/>
		</td><td>
		<%# DataBinder.Eval(Container.DataItem, "website_name")%> <br />
		</td></tr>
		</ItemTemplate>
		<FooterTemplate>
		<tr><td colspan ="2">All Rights Reserved. </td></tr>
		</tabel>
		</FooterTemplate>
		</asp:Repeater>
</div>
        </form>
...........
protected void Page_Load(object sender, EventArgs e)
    {
        DataSet ds = new DataSet();
        ds.ReadXml(@"C:\Users\Sunnyvale\Documents\Visual Studio 2015\WebSite6\XMLFile.xml");
        repeater1.DataSource = ds.Tables[0];
        repeater1.DataBind();
    }

