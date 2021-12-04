<asp:HyperLink ID="HyperLink1" runat="server">
   HyperLink
</asp:HyperLink>

Property	Description
ImageUrl	Path of the image to be displayed by the control.
NavigateUrl	Target link URL.
Text	The text to be displayed as the link.
Target	The window or frame which loads the linked page.

<asp:HyperLink ID="HyperLink1" runat="Server" Text="Go to Button Control tutorial" NavigateUrl="~/Default3.aspx" />
                    
                    // location with link as Image
                    <asp:HyperLink ID="HyperLink2" runat="Server"  ImageUrl="~/img/sunny.png" ToolTip="Go to ImageButton control tutorial" />