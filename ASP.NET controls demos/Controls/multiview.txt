<asp:MultiView ID="MultiView1" runat="server">
    <asp:View ID="View1" runat="server">
    </asp:View>    
    <asp:View ID="View2" runat="server">
    </asp:View>
    <asp:View ID="View3" runat="server">
    </asp:View>
</asp:MultiView>

Let's create a simple example, where we want to capture employee information on a step by step basis.
1. First capture Employee Personal details
2. Next capture Employee contact details
3. Show summary for confirmation. Upon confirmation, save the data to a database table

HTML of the aspx page
<div style="font-family: Arial">
    <asp:MultiView ID="multiViewEmployee" runat="server">
        <asp:View ID="viewPersonalDetails" runat="server">
            <table style="border:1px solid black">
                <tr>
                    <td colspan="2">
                        <h2>Step 1 - Personal Details</h2>
                    </td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>
                        <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>
                        <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <asp:DropDownList ID="ddlGender" runat="server">
                            <asp:ListItem Text="Male" Value="Male"></asp:ListItem>
                            <asp:ListItem Text="Female" Value="Female"></asp:ListItem>
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:right">
                        <asp:Button ID="btnGoToStep2" runat="server" 
                        Text="Step 2 >>" onclick="btnGoToStep2_Click" />
                    </td>
                </tr>
            </table>
        </asp:View>    
        <asp:View ID="viewContactDetails" runat="server">
            <table style="border:1px solid black">
                <tr>
                    <td colspan="2">
                        <h2>Step 2 - Contact Details</h2>
                    </td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>
                        <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>
                        <asp:TextBox ID="txtMobile" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Button ID="btnBackToStep1" runat="server" Text="<< Step 1" 
                            onclick="btnBackToStep1_Click" />
                    </td>
                    <td style="text-align:right">
                        <asp:Button ID="btnGoToStep3" runat="server" Text="Step 3 >>" 
                            onclick="btnGoToStep3_Click" />
                    </td>
                </tr>
            </table>
        </asp:View>
        <asp:View ID="viewSummary" runat="server">
            <table style="border:1px solid black">
                <tr>
                    <td colspan="2"><h2>Step 3 - Summary</h2></td>
                </tr>
                <tr>
                    <td colspan="2"><h3>Personal Details</h3></td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>
                        :<asp:Label ID="lblFirstName" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>
                        :<asp:Label ID="lblLastName" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        :<asp:Label ID="lblGender" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><h3>Contact Details</h3></td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>
                        :<asp:Label ID="lblEmail" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>
                        :<asp:Label ID="lblMobile" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Button ID="Button1" runat="server" Text="<< Step 2" 
                            onclick="Button1_Click" />
                    </td>
                    <td style="text-align:right">
                        <asp:Button ID="Button2" runat="server" Text="Submit >>" 
                            onclick="Button2_Click" />
                    </td>
                </tr>
            </table>
        </asp:View>
    </asp:MultiView>
</div> 

Code-Behind Page:
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        multiViewEmployee.ActiveViewIndex = 0;
    }
}
        
protected void btnGoToStep2_Click(object sender, EventArgs e)
{
    multiViewEmployee.ActiveViewIndex = 1;
}

protected void btnBackToStep1_Click(object sender, EventArgs e)
{
    multiViewEmployee.ActiveViewIndex = 0;
}

protected void btnGoToStep3_Click(object sender, EventArgs e)
{
    lblFirstName.Text = txtFirstName.Text;
    lblLastName.Text = txtLastName.Text;
    lblGender.Text = ddlGender.SelectedValue;

    lblEmail.Text = txtEmail.Text;
    lblMobile.Text = txtMobile.Text;

    multiViewEmployee.ActiveViewIndex = 2;
}

protected void Button1_Click(object sender, EventArgs e)
{
    multiViewEmployee.ActiveViewIndex = 1;
}

protected void Button2_Click(object sender, EventArgs e)
{
    // Write ado.net code to save data to a database table
     Response.Redirect("~/Confirmation.aspx");
}

ActiveViewIndex property of the Multiview control is used to determine, the view that is visible or active.

This can also be achieved using the wizard control. We will discuss about wizard control in the next video session.

Another way to achieve this, is by creating multiple webforms and passing data between webforms using 
1. Cookies
2. Query Strings
3. Session variables