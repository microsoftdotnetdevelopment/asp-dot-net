The panel control is used as a container for other controls. 
A panel control is very handy, when you want to group controls, and then show or hide, all the controls in the group. 
Panel control, is also very useful, when adding controls to the webform dynamically. 
using the Panel control to group controls, and then toggle their visibility, using the Panel control's Visible property. 
The following webform is used by both, an Admin and Non-Admin user. 
When the Admin user is selected from the dropdownlist, we want to show the controls that are relevant to the Admin user. 
When the Non-Admin user is selected, only the Non-Admin specific content and controls should be shown. 
HTML of the ASPX page. At the moment we are not using Panel control.

<asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="true" 
            onselectedindexchanged="DropDownList1_SelectedIndexChanged">
    <asp:ListItem Text="Select User" Value="-1"></asp:ListItem>
    <asp:ListItem Text="Admin" Value="Admin"></asp:ListItem>
    <asp:ListItem Text="Non-Admin" Value="Non-Admin"></asp:ListItem>
</asp:DropDownList>
<table>
    <tr>
        <td colspan="2">
            <asp:Label ID="AdminGreeting" runat="server" Font-Size="XX-Large"
            Text="You are logged in as an administrator">
            </asp:Label>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminNameLabel" runat="server" Text="Admin Name:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminNameTextBox" runat="server" Text="Tom">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminRegionLabel" runat="server" Text="Admin Region:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminRegionTextBox" runat="server" Text="Asia">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminActionsLabel" runat="server" Text="Actions:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminActionsTextBox" runat="server" Font-Size="Medium" TextMode="MultiLine"
                 
                Text="There are 4 user queries to be answered by the end of Dcemeber 25th 2013." 
                Font-Bold="True" ></asp:TextBox>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td colspan="2">
            <asp:Label ID="NonAdminGreeting" runat="server" Font-Size="XX-Large"
            Text="Welcome Tom!">
            </asp:Label>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminNameLabel" runat="server" Text="User Name:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminNameTextBox" runat="server" Text="Mike">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminRegionLabel" runat="server" Text="User Region:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminRegionTextBox" runat="server" Text="United Kingdom">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminCityLabel" runat="server" Text="City:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminCityTextBox" runat="server" Text="London">
            </asp:TextBox>
        </td>
    </tr>
</table> 



Code-Behind code. Since we are not using the panel control, each control's visible property need to be changed depending on the selection in the dropdownlist.
protected void Page_Load(object sender, EventArgs e)
{
    // When the page first loads, hide all admin and non admin controls
    if (!IsPostBack)
    {
        HideAdminControls();
        HideNonAdminControls();
    }
}

protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
{
    if (DropDownList1.SelectedValue == "Admin")
    {
        ShowAdminControls();
        HideNonAdminControls();
    }
    else if (DropDownList1.SelectedValue == "Non-Admin")
    {
        ShowNonAdminControls();
        HideAdminControls();
    }
    else
    {
        HideAdminControls();
        HideNonAdminControls();
    }
}

private void HideAdminControls()
{
    AdminGreeting.Visible = false;
    AdminNameLabel.Visible = false;
    AdminNameTextBox.Visible = false;
    AdminRegionLabel.Visible = false;
    AdminRegionTextBox.Visible = false;
    AdminActionsLabel.Visible = false;
    AdminActionsTextBox.Visible = false;
}
private void ShowAdminControls()
{
    AdminGreeting.Visible = true;
    AdminNameLabel.Visible = true;
    AdminNameTextBox.Visible = true;
    AdminRegionLabel.Visible = true;
    AdminRegionTextBox.Visible = true;
    AdminActionsLabel.Visible = true;
    AdminActionsTextBox.Visible = true;
}
private void HideNonAdminControls()
{
    NonAdminGreeting.Visible = false;
    NonAdminNameLabel.Visible = false;
    NonAdminNameTextBox.Visible = false;
    NonAdminRegionLabel.Visible = false;
    NonAdminRegionTextBox.Visible = false;
    NonAdminCityLabel.Visible = false;
    NonAdminCityTextBox.Visible = false;
}
private void ShowNonAdminControls()
{
    NonAdminGreeting.Visible = true;
    NonAdminNameLabel.Visible = true;
    NonAdminNameTextBox.Visible = true;
    NonAdminRegionLabel.Visible = true;
    NonAdminRegionTextBox.Visible = true;
    NonAdminCityLabel.Visible = true;
    NonAdminCityTextBox.Visible = true;
} 

HTML of the ASPX page. The panel control is used to group the controls.
<asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="true" 
            onselectedindexchanged="DropDownList1_SelectedIndexChanged">
    <asp:ListItem Text="Select User" Value="-1"></asp:ListItem>
    <asp:ListItem Text="Admin" Value="Admin"></asp:ListItem>
    <asp:ListItem Text="Non-Admin" Value="Non-Admin"></asp:ListItem>
</asp:DropDownList>
<asp:Panel ID="AdminPanel" runat="server">
<table>
    <tr>
        <td colspan="2">
            <asp:Label ID="AdminGreeting" runat="server" Font-Size="XX-Large"
            Text="You are logged in as an administrator">
            </asp:Label>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminNameLabel" runat="server" Text="Admin Name:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminNameTextBox" runat="server" Text="Tom">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminRegionLabel" runat="server" Text="Admin Region:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminRegionTextBox" runat="server" Text="Asia">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="AdminActionsLabel" runat="server" Text="Actions:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="AdminActionsTextBox" runat="server" Font-Size="Medium" TextMode="MultiLine"
                 
                Text="There are 4 user queries to be answered by the end of Dcemeber 25th 2013." 
                Font-Bold="True" ></asp:TextBox>
        </td>
    </tr>
</table>
</asp:Panel>
<asp:Panel ID="NonAdminPanel" runat="server">
<table>
    <tr>
        <td colspan="2">
            <asp:Label ID="NonAdminGreeting" runat="server" Font-Size="XX-Large"
            Text="Welcome Tom!">
            </asp:Label>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminNameLabel" runat="server" Text="User Name:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminNameTextBox" runat="server" Text="Mike">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminRegionLabel" runat="server" Text="User Region:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminRegionTextBox" runat="server" Text="United Kingdom">
            </asp:TextBox>
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="NonAdminCityLabel" runat="server" Text="City:">
            </asp:Label>
        </td>
        <td>
            <asp:TextBox ID="NonAdminCityTextBox" runat="server" Text="London">
            </asp:TextBox>
        </td>
    </tr>
</table>
</asp:Panel>

Code-Behind code: 
protected void Page_Load(object sender, EventArgs e)
{
    // When the page first loads, hide admin and non admin panels
    if (!IsPostBack)
    {
        AdminPanel.Visible = false;
        NonAdminPanel.Visible = false;
    }
}

protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
{
    if (DropDownList1.SelectedValue == "Admin")
    {
        AdminPanel.Visible = true;
        NonAdminPanel.Visible = false;
    }
    else if (DropDownList1.SelectedValue == "Non-Admin")
    {
        AdminPanel.Visible = false;
        NonAdminPanel.Visible = true;
    }
    else
    {
        AdminPanel.Visible = false;
        NonAdminPanel.Visible = false;
    }
} 