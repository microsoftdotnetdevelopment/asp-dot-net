<asp:Menu ID="Menu1" runat="server">
    <Items>
        <asp:MenuItem NavigateUrl="~/Home.aspx" Text="Home" Value="Home">
        </asp:MenuItem>
        <asp:MenuItem NavigateUrl="~/Employee.aspx" Text="Employee" Value="Employee">
            <asp:MenuItem NavigateUrl="~/UploadResume.aspx" Text="Upload Resume" Value="Upload Resume">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/EditResume.aspx" Text="Edit Resume" Value="Edit Resume">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/ViewResume.aspx" Text="View Resume" Value="View Resume">
            </asp:MenuItem>
        </asp:MenuItem>
        <asp:MenuItem NavigateUrl="~/Employer.aspx" Text="Employer" Value="Employer">
            <asp:MenuItem NavigateUrl="~/UploadJob.aspx" Text="Upload Job" Value="Upload Job">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/EditJob.aspx" Text="Edit Job" Value="Edit Job">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/ViewJob.aspx" Text="View Job" Value="View Job">
            </asp:MenuItem>
        </asp:MenuItem>
        <asp:MenuItem NavigateUrl="~/Admin.aspx" Text="Admin" Value="Admin">
            <asp:MenuItem NavigateUrl="~/AddUser.aspx" Text="Add User" Value="Add User">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/EditUser.aspx" Text="Edit User" Value="Edit User">
            </asp:MenuItem>
            <asp:MenuItem NavigateUrl="~/ViewUser.aspx" Text="View User" Value="View User">
            </asp:MenuItem>
        </asp:MenuItem>
    </Items>
</asp:Menu>

<asp:Menu ID="Menu1" runat="server" Orientation="Horizontal">
<asp:Menu ID="Menu1" runat="server" StaticDisplayLevels="2">

To control the amount of time it takes for the dynamically displayed portion of a menu to disappear, use DisappearAfter property. 
This is in milliseconds. If you want the menu to disappear after 2 seconds, you would set it to 2000 milliseconds as shown below.
<asp:Menu ID="Menu1" runat="server" DisappearAfter="2000"> 