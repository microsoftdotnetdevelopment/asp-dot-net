<asp:CheckBox ID="CheckBox1" runat="server" />
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"    />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>

if (CheckBox1.Checked == true)
        {
            Label1.Text = "hey";
        }
        else
        {
            Label1.Text = "helo";
        }

Property	Description
Text	The text displayed next to the check box or radio button.
Checked	Specifies whether it is selected or not, default is false.
GroupName	Name of the group the control belongs to.


<script runat="server">
    protected void CheckBox1_CheckChanged(object sender, System.EventArgs e) {

        if (CheckBox1.Checked == true) {
            Label1.Text = "WOW! You are a member of an asp.net user group.";
            Label1.ForeColor = System.Drawing.Color.Green;
        }
        else{
            Label1.Text = "You are not a member of any asp.net user group.";
            Label1.ForeColor = System.Drawing.Color.Crimson;
        }
    }
</script>
