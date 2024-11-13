Items	The collection of ListItem objects that represents the items in the control. This property returns an object of type ListItemCollection.
Rows	Specifies the number of items displayed in the box. If actual list contains more rows than displayed then a scroll bar is added.
SelectedIndex	The index of the currently selected item. If more than one item is selected, then the index of the first selected item. If no item is selected, the value of this property is -1.
SelectedValue	The value of the currently selected item. If more than one item is selected, then the value of the first selected item. If no item is selected, the value of this property is an empty string ("").
SelectionMode	Indicates whether a list box allows single selections or multiple selections.

Common properties of each list item objects:
Property	Description
Text	        The text displayed for the item.
Selected	Indicates whether the item is selected.
Value	        A string value associated with the item.

The SelectedIndexChanged event is raised when the user selects a different item from a drop-down list or list box.
Ex:1-
<asp:DropDownList runat="server" id="GreetList" autopostback="true">
    <asp:ListItem value="no one">No one</asp:ListItem>
    <asp:ListItem value="world">World</asp:ListItem>
    <asp:ListItem value="universe">Universe</asp:ListItem>
</asp:DropDownList>

<asp:DropDownList runat="server" id="GreetList" autopostback="true" onselectedindexchanged="GreetList_SelectedIndexChanged">
protected void GreetList_SelectedIndexChanged(object sender, EventArgs e)
{
    HelloWorldLabel.Text = "Hello, " + GreetList.SelectedValue;
}
Ex:2-  Data binding
<asp:DropDownList ID="ddlGender" runat="server" Width="200px">
 
<asp:ListItem Text="Select Gender" Value="0"></asp:ListItem>
                
<asp:ListItem Text="Male" Value="1"></asp:ListItem>
 <asp:ListItem Text="Female" Value="2"></asp:ListItem </asp:DropDownList>
<asp:Button ID="btnSubmit" runat="server" Text="Click to Retrieve Value" onclick="btnSubmit_Click" />            
           
 </div>
 <div>
      
 Selected Item Text: <asp:Label ID="lblSelectedText" runat="server"></asp:Label>
 
</div><div>
   
Selected Item Value: <asp:Label ID="lblSelectedValue" runat="server"></asp:Label>
</div>

////Retrieve Selected Text from Dropdown
lblSelectedText.Text = ddlGender.SelectedItem.Text;

//Retrieve Selected Value from Dropdown
lblSelectedValue.Text = ddlGender.SelectedValue;
-----------------------------------------------------------
 protected void Page_Load(object sender, EventArgs e)
    {
        SqlConnection conn = new SqlConnection();
        conn.ConnectionString = "Data source=SUNNY;Initial catalog=synapse;Integrated security=true";
        string query = "select * from countrytable";
        conn.Open();
        SqlCommand cmd = new SqlCommand(query, conn);
        SqlDataAdapter sda = new SqlDataAdapter(cmd);
        DataSet ds = new DataSet();
        sda.Fill(ds);
        conn.Close();
        ddlcountry.DataSource = ds;
        ddlcountry.DataTextField = "countryname";
        ddlcountry.DataValueField = "countryid";
        ddlcountry.DataBind();
    }

    protected void DropDownList1_DataBound(object sender, EventArgs e)
    {
        DropDownList ddl = sender as DropDownList;
        if (ddl != null)
        {
            foreach (ListItem li in ddl.Items)
            {
                li.Attributes["title"] = li.Text;
            }
        }
    }
............................
        <asp:DropDownList ID="ddlcountry" runat="server" OnDataBound="DropDownList1_DataBound"   ></asp:DropDownList>



Binding an asp.net dropdownlist with an XML file --
In the Countries.xml file, copy and paste the following
<?xml version="1.0" encoding="utf-8" ?>
<Countries>
  <Country>
    <CountryId>101</CountryId>
    <CountryName>India</CountryName>
  </Country>
  <Country>
    <CountryId>102</CountryId>
    <CountryName>US</CountryName>
  </Country>
  <Country>
    <CountryId>103</CountryId>
    <CountryName>Australia</CountryName>
  </Country>
  <Country>
    <CountryId>104</CountryId>
    <CountryName>UK</CountryName>
  </Country>
</Countries> 

....
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        //Create a new DataSet
        DataSet DS = new DataSet();
        //Read the xml data from the XML file using ReadXml() method
        DS.ReadXml(Server.MapPath("Countries.xml"));
        DropDownList1.DataTextField = "CountryName";
        DropDownList1.DataValueField = "CountryId";
        DropDownList1.DataSource = DS;
        DropDownList1.DataBind();
        ListItem li = new ListItem("Select", "-1");
        DropDownList1.Items.Insert(0, li);
    }
}

...
aspx
dropdownlist

