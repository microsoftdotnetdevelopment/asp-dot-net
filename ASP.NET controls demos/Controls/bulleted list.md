 <asp:BulletedList ID=BulletedList1 BulletStyle="Circle" runat=server>
         <asp:ListItem>Item #1</asp:ListItem>
         <asp:ListItem>Item #2</asp:ListItem>
         <asp:ListItem>Item #3</asp:ListItem>
         <asp:ListItem>Item #4</asp:ListItem>
        </asp:BulletedList>
..............
        <asp:BulletedList ID="BulletedList1" runat="server" DisplayMode="HyperLink">
            <asp:ListItem Value="http://support.Microsoft.com">Support</asp:ListItem>
            <asp:ListItem Value="http://www.asp.net">ASP.NET</asp:ListItem>
            <asp:ListItem Value="http://msdn.microsoft.com">MSDN</asp:ListItem>
        </asp:BulletedList>

---------------------------------
asp:BulletedList ID="CountriesBulletedList" runat="server" BulletStyle="Numbered" DisplayMode="HyperLink">
    <asp:ListItem Text="Google" Value="http://google.com"></asp:ListItem>
    <asp:ListItem Text="Youtube" Value="http://Youtube.com"></asp:ListItem>
    <asp:ListItem Text="Blogger" Value="http://Blooger.com"></asp:ListItem>
    <asp:ListItem Text="Gmail" Value="http://Gmail.com"></asp:ListItem>
</asp:BulletedList>

The following HTML, sets DisplayMode="LinkButton" and onclick="CountriesBulletedList_Click"
<asp:BulletedList ID="CountriesBulletedList" runat="server" 
    DisplayMode="LinkButton" onclick="CountriesBulletedList_Click">
    <asp:ListItem Text="Google" Value="1"></asp:ListItem>
    <asp:ListItem Text="Microsoft" Value="2"></asp:ListItem>
    <asp:ListItem Text="Dell" Value="3"></asp:ListItem>
    <asp:ListItem Text="IBM" Value="4"></asp:ListItem>
</asp:BulletedList>

Code behind code
protected void CountriesBulletedList_Click(object sender, BulletedListEventArgs e)
{
    ListItem li = CountriesBulletedList.Items[e.Index];
    Response.Write("Text = " + li.Text + "<br/>");
    Response.Write("Value = " + li.Value + "<br/>");
    Response.Write("Index = " + e.Index.ToString());
} 