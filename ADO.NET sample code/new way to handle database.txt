string connectionString = ConfigurationManager.ConnectionStrings["SQLDbConnection"].ToString();
--------
web.config-
<?xml version="1.0"?>
<configuration>
  <connectionStrings>
	<add name="SQLDbConnection"
		 connectionString="Server=servername; Database=pubs; User Id=username; password=password"
		 providerName="System.Data.SqlClient" />
  </connectionStrings>
</configuration>
............
 <connectionStrings>
	<add name="SQLDbConnection"
		 connectionString="Data Source=SUNNY;Initial catalog=demo;Integrated security=True;" providerName="System.Data.SqlClient;" />
  </connectionStrings>
.........

	<form id="form1" runat="server">
	<div>
		<asp:Button ID="Button1" runat="server" Text="Button" onclick="Button1_Click" />
	</div>
	<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
	</form>
...........
protected void Button1_Click(object sender, EventArgs e)
	{
		string connectionString = ConfigurationManager.ConnectionStrings["SQLDbConnection"].ToString();
		SqlConnection connection = new SqlConnection(connectionString);
		connection.Open();
		Label1.Text = "Connected to Database Server !!";
		connection.Close();
	}