 UpdatePanel
This control allows you to wrap markup which you would like to allow to be partially updated, that is, updated without causing a real postback to the server

<asp:ScriptManager ID="ScriptManager1" runat="server"> </asp:ScriptManager>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Label ID="Label1" runat="server" Text="click"></asp:Label>
                <br /><br />
                <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"    /></ContentTemplate>
        </asp:UpdatePanel>


        Label1.Text= "Hello, world - this is a fresh message from ASP.NET AJAX!The time right now is: " + DateTime.Now.ToLongTimeString();

-----------------------------------------------------------------------
<asp:ScriptManager ID="ScriptManager1" runat="server" />
        <asp:UpdatePanel runat="server" id="UpdatePanel" updatemode="Conditional">
        <Triggers>
            <asp:AsyncPostBackTrigger controlid="UpdateButton2" eventname="Click" />
        </Triggers>
            <ContentTemplate>
                <asp:Label runat="server" id="DateTimeLabel1" />
                <asp:Button runat="server" id="UpdateButton1" OnClick="UpdateButton2_Click"  text="Update" />               
            </ContentTemplate>
        </asp:UpdatePanel>
        <asp:UpdatePanel runat="server" id="UpdatePanel1" updatemode="Conditional">           
            <ContentTemplate>
                <asp:Label runat="server" id="DateTimeLabel2" />
                <asp:Button runat="server" id="UpdateButton2" OnClick="UpdateButton2_Click"  text="Update" />
            </ContentTemplate>
        </asp:UpdatePanel>

protected void UpdateButton2_Click(object sender, EventArgs e)
    {
        DateTimeLabel1.Text = DateTime.Now.ToString();
        DateTimeLabel2.Text = DateTime.Now.ToString();
    }

 the first UpdatePanel carries a trigger which references the second button. 
This will ensure that the first panel is updated even when a control on a different UpdatePanel is used
If you wish for the content of a UpdatePanel to be updated no matter what, you may change the updatemode property to Always. 