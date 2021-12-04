Create an asp.net web application. Copy and paste the following HTML
<asp:CheckBoxList ID="checkboxListEducation" runat="server" 
            RepeatDirection="Horizontal">
    <asp:ListItem Text="Diploma" Value="1"></asp:ListItem>
    <asp:ListItem Text="Graduate" Value="2"></asp:ListItem>
    <asp:ListItem Text="Post Graduate" Value="3"></asp:ListItem>
    <asp:ListItem Text="Doctrate" Value="4"></asp:ListItem>
</asp:CheckBoxList>
<br />
<asp:Button ID="Button1" runat="server" Text="Button" onclick="Button1_Click" /> 



Copy and paste the following code in Button1_Click event. The sample code prints the Text, Value and Index of the selected list item object.
// Loop thru each list item in the checkboxlist
foreach (ListItem li in checkboxListEducation.Items)
{
    // If the list item is selected
    if (li.Selected)
    {
        // Retrieve the text of the selected list item
        Response.Write("Text = " + li.Text + ", ");
        // Retrieve the value of the selected list item
        Response.Write("Value = " + li.Value + ", ");
        // Retrieve the index of the selected list item
        Response.Write("Index = " + checkboxListEducation.Items.IndexOf(li).ToString());
        Response.Write("<br/>");
    }
} 



By default, the ListItem objects are laid out in vertical direction. If you want to change the direction, use RepeatDirection property
<asp:CheckBoxList ID="checkkboxListEducation" runat="server" RepeatDirection="Horizontal">

RepeatColumns property specifies the number of columns used to lay out the items.

Set the Enabled property of the ListItem object to false, to disable the selection, in the CheckBoxList control.

SelectedIndex property of the CheckBoxList control can also be used to get the index of the selected item in the checkboxlist. 
But this property, returns only one selected item, and that too, the item with the lowest index. SelectedIndex property returns -1, if nothing is selected.

SelectedValue property returns the selected Item's value, but only for one selected item. If no item is selected this property returns empty string.

To retrieve the Text of the selected item, SelectedItem.Text property can be used.
 SelectedItem will be NULL, if nothing is selected, and hence, calling Text and Value properties may cause NullReferenceException. 
Hence, it is important to check for null, when using SelectedItem property of a CheckBoxList control.
if (checkboxListEducation.SelectedItem != null)
{
    Response.Write(checkboxListEducation.SelectedItem.Text);
} 

---------------------------------------------------
 select or deselect all list items
<asp:Button ID="buttonSelectAll" runat="server" Text="Select All" 
    onclick="buttonSelectAll_Click" /> 
&nbsp; 
<asp:Button ID="buttonDeselectAll" runat="server" Text="De-Select All" 
    onclick="buttonDeselectAll_Click" />
<br /><br />
<asp:CheckBoxList ID="CheckBoxList1" runat="server"
    RepeatDirection="Horizontal">
    <asp:ListItem Text="Diploma" Value="1"></asp:ListItem>
    <asp:ListItem Text="Graduate" Value="2"></asp:ListItem>
    <asp:ListItem Text="Post Graduate" Value="3"></asp:ListItem>
    <asp:ListItem Text="Doctrate" Value="4"></asp:ListItem>
</asp:CheckBoxList>

protected void buttonSelectAll_Click(object sender, EventArgs e)
{
    foreach (ListItem li in CheckBoxList1.Items)
    {
        li.Selected = true;
    }
}

protected void buttonDeselectAll_Click(object sender, EventArgs e)
{
    foreach (ListItem li in CheckBoxList1.Items)
    {
        li.Selected = false;
    }
} 