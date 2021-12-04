<form id="form1" runat="server">
    <div>
     <asp:GridView ID="GridView1" CssClass ="Grid" runat="server" OnRowDeleting="GridView1_RowDeleting"  AutoGenerateColumns = "false"  OnRowDataBound="GridView1_RowDataBound" >
        <Columns>
            <asp:BoundField DataField="Item" HeaderText="Item" />
            <asp:BoundField DataField="Price" HeaderText="Price" />
            <asp:CommandField ShowDeleteButton="True" ButtonType="Button" />
        </Columns>
    </asp:GridView>
    </div>
    </form>
..........
 protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            DataTable dt = new DataTable();
            dt.Columns.AddRange(new DataColumn[2] { new DataColumn("Item"), new DataColumn("Price") });
            dt.Rows.Add("Shirt", 450);
            dt.Rows.Add("Jeans", 3200);
            dt.Rows.Add("Trousers", 1900);
            dt.Rows.Add("Tie", 185);
            dt.Rows.Add("Cap", 100);
            dt.Rows.Add("Hat", 120);
            dt.Rows.Add("Scarf", 290);
            dt.Rows.Add("Belt", 150);
            ViewState["dt"] = dt;
            BindGrid();
        }
    }
    protected void BindGrid()
    {
        GridView1.DataSource = ViewState["dt"] as DataTable;
        GridView1.DataBind();
    }


    protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        int index = Convert.ToInt32(e.RowIndex);
        DataTable dt = ViewState["dt"] as DataTable;
        dt.Rows[index].Delete();
        ViewState["dt"] = dt;
        BindGrid();
    }

    protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            string item = e.Row.Cells[0].Text;
            foreach (Button button in e.Row.Cells[2].Controls.OfType<Button>())
            {
                if (button.CommandName == "Delete")
                {
                    button.Attributes["onclick"] = "if(!confirm('Do you want to delete " + item + "?')){ return false; };";
                }
            }
        }
    }

----------------------------------------------------------
To set primary key on any column-
DataColumn pkCurrencyCodeId = TblCurrencyCode.Columns.Add("CurrencyCodeId", typeof(Int32));
TblCurrencyCode.PrimaryKey = new DataColumn[] { pkCurrencyCodeId };

dt.PrimaryKey = new DataColumn[] {dt.Columns["PID"],dt.Columns["ProductID"]};
------------------------------------------------------------