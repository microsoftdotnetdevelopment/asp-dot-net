// Singleline TextBox code
                        <asp:TextBox ID="TextBox1" runat="Server" 
                        Width="300"></asp:TextBox>

// Multiline TextBox code
                        <asp:TextBox ID="TextBox2" runat="Server" 
                        TextMode="multiLine" 
                        Rows="4" Columns="50" 
                        Text="TextBox with TextMode as Multiline">
                        </asp:TextBox>

// TextBox with AutoPostBack=true
                        <asp:TextBox ID="TextBox4" 
                        runat="Server" 
                        AutoPostBack="true"></asp:TextBox>

<asp:TextBox ID="txtstate" runat="server" ></asp:TextBox>


Property	Description
TextMode	Specifies the type of text box. SingleLine creates a standard text box, MultiLIne creates a text box that accepts more than one line of text and the Password causes the characters that are entered to be masked. The default is SingleLine.
Text	        The text content of the text box.
MaxLength	The maximum number of characters that can be entered into the text box.
Wrap	        It determines whether or not text wraps automatically for multi-line text box; default is true.
ReadOnly	Determines whether the user can change the text in the box; default is false, i.e., the user can not change the text.
Columns	        The width of the text box in characters. The actual width is determined based on the font that is used for the text entry.
Rows	        The height of a multi-line text box in lines. The default value is 0, means a single line text box.
AutoPostBack 
Height 
Width 

Events of TextBox:
TextChanged - This event is fired, when the text is changed.

Methods of a TextBox:
Focus - Set input focus onto the control.