using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        
       
        int num = int.Parse(txtnum.Text);
        if (rangecheck(num))
        {
            if (Existitem(ddl1.Items,new ListItem(txtnum.Text,txtnum.Text)))
            {
                Response.Write("exist");
            }
            else
            {
                ddl1.Items.Add(new ListItem(txtnum.Text, txtnum.Text));
                Response.Write("added");
            }
        }
       
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        fill(ddl1.Items);
    }
   bool rangecheck(int a)
    {
        if (a > 0 && a < 21)
            return true;
        else
            return false;
    }
    bool Existitem(ListItemCollection li,ListItem a)
    {
        if (li.Contains(a))
            return true;
        else
            return false;
    }
    public void fill(ListItemCollection li)
    {
                for (int i = 1; i < 21; i++)
        {
            bool result = true;

            foreach (ListItem l in li)
            {
                if (l.Text == i.ToString())
                {
                    result = false;
                    break;
                }
            }
            if (result)
                ddl2.Items.Add(i.ToString());
        }
    }
}
.............
 <asp:TextBox ID="txtnum" runat="server"></asp:TextBox>
        <asp:Button ID="btnplus" runat="server" Text="+"   OnClick="Button1_Click"  />
        <asp:Label ID="Label1" runat="server" Text="First"></asp:Label><br />
        <asp:DropDownList ID="ddl1" runat="server"  AutoPostBack="true"></asp:DropDownList><br />
        <asp:Button ID="Button2" runat="server" Text="Left"   OnClick="Button2_Click"   /><br />
        <asp:Label ID="Label2" runat="server" Text="Second"></asp:Label><br />
        <asp:DropDownList ID="ddl2" runat="server" AutoPostBack="true"></asp:DropDownList><br />
    </div>