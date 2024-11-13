<asp:ListBox ID="ListBox1" runat="server" SelectionMode="Multiple">
    <asp:ListItem Text="Diploma" Value="1"></asp:ListItem>
    <asp:ListItem Text="Graduate" Value="2"></asp:ListItem>
    <asp:ListItem Text="Post Graduate" Value="3"></asp:ListItem>
    <asp:ListItem Text="Doctrate" Value="4"></asp:ListItem>
</asp:ListBox>
<br />
<br />
<asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Button" />

Code Behind Code:
protected void Button1_Click(object sender, EventArgs e)
{
    foreach (ListItem li in ListBox1.Items)
    {
        if (li.Selected)
        {
            Response.Write("Text = " + li.Text + ", ");
            Response.Write("Value = " + li.Value + ", ");
            Response.Write("Index = " + ListBox1.Items.IndexOf(li).ToString());
            Response.Write("<br/>");
        }
    }
} 