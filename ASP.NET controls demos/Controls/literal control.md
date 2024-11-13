1.In many ways a Literal control is similar to a Label control. Both of these controls are used to display Text on a webform. 
The Text property can be set in the HTML or in the code-behind.
2.Label control wraps the text in a span tag when rendered. Any style that is applied to the Label control, will be rendered using the style property of the span tag.

For example, the following HTML
<asp:Label ID="Label1" runat="server"  Text="Lable Text" ForeColor="Red" Font-Bold="true" ></asp:Label>
Will be rendered as
<span id="Label1" style="color:Red;font-weight:bold;">Lable Text</span> 

3. A literal control, doesn't output any surrounding tags. The Text is displayed as is.
For example, the following HTML
<asp:Literal ID="Literal1" runat="server" Text="Literal Control Text"></asp:Literal>
will be rendered as
Literal Control Text

4. If you want to apply any styles to a literal control, include them in the Text of the literal control. 
For example, the following HTML sets the font to red color and bold.
<asp:Literal ID="Literal1" runat="server" Text="<b><font color='Red'>Literal Control Text</font></b>"></asp:Literal>
The above HTML will be rendered as
<b><font color='Red'>Literal Control Text</font></b>

5. So, if you just want the text to be displayed without any styles, then use Literal control, else use Label control.

6. By default, both the Label and Literal Control's does not encode the text they display. For example, the following HTML displays a javascript alert 
<asp:Label ID="Label" runat="server"
Text="<script>alert('Lable Text');</script>">
</asp:Label>
<br />
<asp:Literal ID="Literal1" runat="server"
Text="<script>alert('Literal Text');</script>">
</asp:Literal>

and will be rendered as
<span id="Label"><script>alert('Lable Text');</script></span>
<br />
<script>alert('Literal Text');</script>

7. To HTML encode the Label Text, Server.HtmlEncode() method can be used, and for Literal control, Mode property can be used.
<asp:Label ID="Label1" runat="server"> 
<%=Server.HtmlEncode("<script>alert('Lable Text');</script>")%>
</asp:Label>
<br />
<asp:Literal ID="Literal1" runat="server" 
Text="<script>alert('Literal Text');</script>" 
Mode="Encode"></asp:Literal>

The above HTML will be rendered as
<span id="Label1">&lt;script&gt;alert(&#39;Lable Text&#39;);&lt;/script&gt;</span>
<br />
&lt;script&gt;alert(&#39;Literal Text&#39;);&lt;/script&gt;

8. Literal control is a light weight control, when compared with the Label control.

9. The inheritance hierarchy for Literal control class is (Object => Control => Literal), 
where as for the Lable control, the hierarchy is (Object => Control => WebControl=> Label) 