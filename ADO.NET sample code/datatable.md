default.aspx  
        <asp:Label ID="Label1" runat="server" Text="P_ID"></asp:Label>
        <asp:TextBox ID="txtid" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label2" runat="server" Text="P_Name"></asp:Label>
        <asp:TextBox ID="txtname" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label3" runat="server" Text="p_Company"></asp:Label>
        <asp:TextBox ID="txtcompany" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label4" runat="server" Text="p_Cost"></asp:Label>
        <asp:TextBox ID="txtcost" runat="server"></asp:TextBox><br />
        <asp:Label ID="Label5" runat="server" Text="p_Solddate"></asp:Label>
        <asp:TextBox ID="txtdate" runat="server"></asp:TextBox><br />
        <asp:Button ID="Button1" runat="server" Text="Add" OnClick="Button1_Click"   />
        <asp:Button ID="Button2" runat="server" Text="view" OnClick="Button2_Click"    /><br />
        <asp:GridView ID="grdproducts" runat="server"></asp:GridView>
.........
default.aspx.cs
 protected void Page_Load(object sender, EventArgs e)
    {
        Response.Write(Session.SessionID);
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        DataTable dt = Session["tblproduct"] as DataTable;
        DataRow dr = dt.NewRow();
        dr[0] = int.Parse(txtid.Text);
        dr[1] = txtname.Text;
        dr[2] = double.Parse(txtcost.Text);
        dr[3] = txtcompany.Text;
        dr[4] = DateTime.Parse( txtdate.Text);
       string result= Mytable.AddRow(dt, dr);
        Response.Write(result);

    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        DataTable dt = Session["tblproduct"] as DataTable;
        grdproducts.DataSource = dt;
        grdproducts.DataBind();      

    }
...........
Mytable.cs
public class Mytable
{
  public static DataTable Createtable()
    {
        DataTable dt = new DataTable();
        dt.Columns.Add("PID", typeof(Int32));
        dt.Columns.Add("PNAME", typeof(string));
        dt.Columns.Add("PCOMPANY", typeof(string));
        dt.Columns.Add("PCOST", typeof(double));
        dt.Columns.Add("PSOLDDATE", typeof(DateTime));
        return dt;
    }
    public static string AddRow(DataTable dt, DataRow dr)
    {
        dt.Rows.Add(dr);

        return "Rows Added successfully,Total rows now: "+dt.Rows.Count;
    }
}
............
global.asax
void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started
        Session["tblproduct"] = Mytable.Createtable();
    }


