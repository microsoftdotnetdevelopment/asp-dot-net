<asp:LinkButton ID="LinkButton1" runat="Server" Text="LinkButton: Activate Server Side Event" OnClick="ActivateServerSideEvent" />
..........
 protected void LinkButton1_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("http://www.youtube.com");
    }