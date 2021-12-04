<asp:RadioButtonList ID="ColorRadioButtonList" runat="server" 
    RepeatDirection="Horizontal">
    <asp:ListItem Text="Red" Value="1"></asp:ListItem>
    <asp:ListItem Text="Green" Value="2"></asp:ListItem>
    <asp:ListItem Text="Blue" Value="3"></asp:ListItem>
    <asp:ListItem Text="Orange" Value="4"></asp:ListItem>
</asp:RadioButtonList>
<br />
<asp:Button ID="btnSubmit" runat="server" Text="Submit" 
    onclick="btnSubmit_Click"/>&nbsp;
<asp:Button ID="btnClearSelection" runat="server" Text="Clear Selection" 
    onclick="btnClearSelection_Click"/> 



Copy and paste the following code in your code-behind page
protected void btnSubmit_Click(object sender, EventArgs e)
{
    // If the user has made a choice
    if (ColorRadioButtonList.SelectedIndex != -1)
    {
        Response.Write("Text = " + ColorRadioButtonList.SelectedItem.Text + "<br/>");
        Response.Write("Value = " + ColorRadioButtonList.SelectedItem.Value + "<br/>");
        Response.Write("Index = " + ColorRadioButtonList.SelectedIndex.ToString());
    }
    // If the user has not selected anything
    else
    {
        Response.Write("Please select your favourite color");
    }
}

protected void btnClearSelection_Click(object sender, EventArgs e)
{
    // Clear the user selection
    ColorRadioButtonList.SelectedIndex = -1;
}
