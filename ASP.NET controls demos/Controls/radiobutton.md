<asp:RadioButton ID="RadioButton1" runat="server" Text="pi" GroupName="FoodGroup" />
        <asp:RadioButton ID="RadioButton2" runat="server"  Text="po" GroupName="FoodGroup" />
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click1"   />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>

 protected void Button1_Click1(object sender, EventArgs e)
    {
        if (RadioButton1.Checked == true)
        {
            Label1.Text = "a";
        }
        else if (RadioButton2.Checked == true)
        {
            Label1.Text = "b";
        }
        else
        {
            Label1.Text = "c";
        }
    }
we can give the default value by using checked property to true.
Property	Description
Text	The text displayed next to the check box or radio button.
Checked	Specifies whether it is selected or not, default is false.
GroupName	Name of the group the control belongs to.
TextAlign 
AutoPostBack 

Events:
CheckedChanged - This event is fired when the checked status of the radio button control is changed.

