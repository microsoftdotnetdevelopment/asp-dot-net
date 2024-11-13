
 <form id="form1" runat="server"> 
    <div>
       <h1>Controls being monitored for change events:</h1>
         <asp:TextBox ID="txt" runat="server" AutoPostBack="true" OnTextChanged="txt_TextChanged"   />  <br/><br/> 
       <asp:CheckBox ID="chk" runat="server" AutoPostBack="true" OnCheckedChanged="txt_TextChanged"/>  <br/><br/>
        <asp:RadioButton ID="opt1" runat="server" GroupName="Sample" AutoPostBack="true" OnCheckedChanged="txt_TextChanged"/> 
        <asp:RadioButton ID="opt2" runat="server" GroupName="Sample" AutoPostBack="true" OnCheckedChanged="txt_TextChanged"/> 
        <h1>List of events:</h1>
         <asp:ListBox ID="lstt" runat="server" Width="355px" Height="150px"/><br/> <br/><br/><br/> 
    </div>
    </form>
...........
 protected void Page_Load(object sender, EventArgs e)
    {
        Log("<< Page_Load >>");
    }
    protected void Page_PreRender(object sender, EventArgs e)
    {        // When the Page.PreRender event occurs, it is too late      
             // to change the list.      
        Log("Page_PreRender");
    }

    protected void txt_TextChanged(object sender, EventArgs e)
    {
        string ctrlName = ((Control)sender).ID;
        Log(ctrlName + " Changed");
    }
    private void Log(string entry)
    {
        lstt.Items.Add(entry);
        // Select the last item to scroll the list so the most recent 
        // entries are visible. 
        lstt.SelectedIndex = lstt.Items.Count - 1;
    } 
    }
