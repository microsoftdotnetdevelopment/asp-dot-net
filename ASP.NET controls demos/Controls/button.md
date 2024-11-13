<asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Click" / >
Text	The text displayed on the button. This is for button and link button controls only.
ImageUrl	For image button control only. The image to be displayed for the button.
AlternateText	For image button control only. The text to be displayed if the browser cannot display the image.
CausesValidation	Determines whether page validation occurs when a user clicks the button. The default is true.
CommandName	A string value that is passed to the command event when a user clicks the button.
CommandArgument	A string value that is passed to the command event when a user clicks the button.
PostBackUrl	The URL of the page that is requested when the user clicks the button.

 <asp:Button id=Button1 Text="Click Me" onclick="Button1_Click" runat="server" />
   ...........
<asp:Button id=Button1 runat="server"
            Text="Button1"
            Width="100px"
            onmouseover="this.style.backgroundColor='yellow'"
            onmouseout="this.style.backgroundColor='buttonface'"
            onclick="Button1_Click" />
..............
<asp:Button id=Button2 runat="server"
            Text="Button2"
            Width="100px"
            onmouseover="this.style.fontWeight='bold'"
            onmouseout="this.style.fontWeight='normal'"
            onclick="Button2_Click" />  