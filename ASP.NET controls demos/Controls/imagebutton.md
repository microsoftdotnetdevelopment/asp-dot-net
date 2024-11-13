<asp:ImageButton ID="ImageButton1" runat="Server" ImageUrl="~/images/demoButton.gif" OnClick="ActivateServerSideEvent" />
........... 
 protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("http://www.youtube.com");
    }