<div>
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false">
            <Columns>
                <asp:BoundField  DataField="name" HeaderText="name" ItemStyle-Width="150px"/>
                <asp:BoundField DataField="age" HeaderText="age" ItemStyle-Width="100px"/>
                <asp:BoundField DataField="city" HeaderText="city" ItemStyle-Width="100px"/>
            </Columns>
        </asp:GridView>
        <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="false">
            <Columns>
                <asp:BoundField DataField="name" HeaderText="name" ItemStyle-Width="150px"/>
                <asp:BoundField DataField="company" HeaderText="company" ItemStyle-Width="150px"/>
                <asp:BoundField DataField="cost" HeaderText="cost" ItemStyle-Width="150px"/>
            </Columns>
        </asp:GridView>
    </div>
..................
  if (!this.IsPostBack)
        {
            string constr = ConfigurationManager.ConnectionStrings["SQLDbConnection"].ConnectionString;
            string query = "SELECT name, age, city FROM student;";
            query += "SELECT name, company, cost  FROM shop";

            using (SqlConnection con = new SqlConnection(constr))
            {
                using (SqlCommand cmd = new SqlCommand(query))
                {
                    using (SqlDataAdapter sda = new SqlDataAdapter())
                    {
                        cmd.Connection = con;
                        sda.SelectCommand = cmd;
                        using (DataSet ds = new DataSet())
                        {
                            sda.Fill(ds);
                            GridView1.DataSource = ds.Tables[0];
                            GridView1.DataBind();
                            GridView2.DataSource = ds.Tables[1];
                            GridView2.DataBind();
                        }
                    }
                }
            }
        }
....................
<connectionStrings>
	<add name="SQLDbConnection"
		 connectionString="Data Source=SUNNY;Initial catalog=demo;Integrated security=True;" providerName="System.Data.SqlClient;" />
  </connectionStrings>