 <asp:Label ID="Label1" runat="server" Text="select country" ></asp:Label>
        <asp:DropDownList ID="ddlcountry" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlcountry_SelectedIndexChanged"   ></asp:DropDownList><br />
        <asp:Label ID="Label2" runat="server" Text="select state"></asp:Label>
        <asp:DropDownList ID="ddlstate" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlstate_SelectedIndexChanged"   ></asp:DropDownList><br />
        <asp:Label ID="Label3" runat="server" Text="select region"></asp:Label>
        <asp:DropDownList ID="ddlregion" runat="server"></asp:DropDownList><br />
...........
 protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            BindContrydropdown();
        }
    } 

protected void BindContrydropdown()
    {
        //conenction path for database
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=synapse;Integrated security=true";

        con.Open();
        SqlCommand cmd = new SqlCommand("select * from countrytable", con);
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        DataSet ds = new DataSet();
        da.Fill(ds);
        con.Close();
        ddlcountry.DataSource = ds;
        ddlcountry.DataTextField = "CountryName";
        ddlcountry.DataValueField = "CountryID";
        ddlcountry.DataBind();
        ddlcountry.Items.Insert(0, new ListItem("--Select--", "0"));
        ddlcountry.Items.Insert(0, new ListItem("--Select--", "0"));
        ddlregion.Items.Insert(0, new ListItem("--Select--", "0"));

    }
 

protected void ddlcountry_SelectedIndexChanged(object sender, EventArgs e)
    {
        int CountryID = Convert.ToInt32(ddlcountry.SelectedValue);
        SqlConnection con = new SqlConnection();
        con.ConnectionString= "Data source=SUNNY;Initial catalog=synapse;Integrated security=true";
        con.Open();
        SqlCommand cmd = new SqlCommand("select * from statetable where CountryID=" + CountryID, con);
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        DataSet ds = new DataSet();
        da.Fill(ds);
        con.Close();
        ddlstate.DataSource = ds;
        ddlstate.DataTextField = "StateName";
        ddlstate.DataValueField = "StateID";
        ddlstate.DataBind();
        ddlstate.Items.Insert(0, new ListItem("--Select--", "0"));
        if (ddlstate.SelectedValue == "0")
        {
            ddlregion.Items.Clear();
            ddlregion.Items.Insert(0, new ListItem("--Select--", "0"));
        }
    }

protected void ddlstate_SelectedIndexChanged(object sender, EventArgs e)
    {
        int StateID = Convert.ToInt32(ddlstate.SelectedValue);
        SqlConnection con = new SqlConnection();
        con.ConnectionString = "Data source=SUNNY;Initial catalog=synapse;Integrated security=true";

        con.Open();
        SqlCommand cmd = new SqlCommand("select * from regiontable where stateid=" + StateID, con);
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        DataSet ds = new DataSet();
        da.Fill(ds);
        con.Close();
        ddlregion.DataSource = ds;
        ddlregion.DataTextField = "RegionName";
        ddlregion.DataValueField = "RegionID";
        ddlregion.DataBind();
        ddlregion.Items.Insert(0, new ListItem("--Select--", "0"));
    }