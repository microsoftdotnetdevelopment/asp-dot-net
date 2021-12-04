the OnRowEditing event handler which will be triggered for a GridView Row when the edit button inside that row is clicked.
Inside this event handler, I am setting the GridView EditIndex with the NewEditIndex fetched from the GridViewEditEventArgs object and 
then the GridView is again populated from the temporary DataTable stored inside the ViewState variable.
The above process sets the GridView in Edit Mode.
default.aspx
 <form id="form1" runat="server">
    <div>
      <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false" OnRowEditing="GridView1_RowEditing"   >
        <Columns>
            <asp:BoundField DataField="Name" HeaderText="Name" ItemStyle-Width="150" />
            <asp:BoundField DataField="Country" HeaderText="Country" ItemStyle-Width="150" />
            <asp:TemplateField>
                <ItemTemplate>
                    <asp:LinkButton Text="Edit" runat="server" CommandName="Edit" />
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:LinkButton Text="Update" runat="server" OnClick="Unnamed_Click"     />
                    <asp:LinkButton Text="Cancel" runat="server" OnClick="Unnamed_Click1"    />
                </EditItemTemplate>
            </asp:TemplateField>
        </Columns>
    </asp:GridView>
    </div>
    </form>

default.aspx.cs
protected void Page_Load(object sender, EventArgs e)
    {
        if (!this.IsPostBack)
        {
            DataTable dt = new DataTable();
            dt.Columns.AddRange(new DataColumn[3] { new DataColumn("Id"), new DataColumn("Name"), new DataColumn("Country") });
            dt.Rows.Add(1, "John Hammond", "United States");
            dt.Rows.Add(2, "Mudassar Khan", "India");
            dt.Rows.Add(3, "Suzanne Mathews", "France");
            dt.Rows.Add(4, "Robert Schidner", "Russia");
            ViewState["dt"] = dt;
            this.BindGrid();
        } 
    }
    protected void BindGrid()
    {
        GridView1.DataSource = ViewState["dt"] as DataTable;
        GridView1.DataBind();
    }

    protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
    {
        GridView1.EditIndex = e.NewEditIndex;
        this.BindGrid();
    }

    protected void Unnamed_Click(object sender, EventArgs e)
    {
        GridViewRow row = (sender as LinkButton).NamingContainer as GridViewRow;
        string name = (row.Cells[0].Controls[0] as TextBox).Text;
        string country = (row.Cells[1].Controls[0] as TextBox).Text;
        DataTable dt = ViewState["dt"] as DataTable;
        dt.Rows[row.RowIndex]["Name"] = name;
        dt.Rows[row.RowIndex]["Country"] = country;
        ViewState["dt"] = dt;
        GridView1.EditIndex=-1;
        this.BindGrid();
    }

    protected void Unnamed_Click1(object sender, EventArgs e)
    {
        GridView1.EditIndex = -1;
        this.BindGrid();
    }