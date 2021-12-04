WebForm1.aspx
<asp:FileUpload ID="FileUpload1" runat="server" />
<asp:Button ID="Button1" runat="server" Text="Upload" OnClick="Button1_Click" />
<asp:Panel ID="Panel1" runat="server" Width="440px"
    BorderStyle="Dashed" BorderColor="#000066">
</asp:Panel>

WebForm1.aspx.cs
public partial class WebForm1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        LoadImages();
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        if (FileUpload1.HasFile)
        {
            string fileName = FileUpload1.FileName;
            FileUpload1.PostedFile.SaveAs(Server.MapPath("~/Data/") + fileName);
        }
        Response.Redirect("~/WebForm1.aspx");
    }

    private void LoadImages()
    {
        foreach (string strfile in Directory.GetFiles(Server.MapPath("~/Data")))
        {
            ImageButton imageButton = new ImageButton();
            FileInfo fi = new FileInfo(strfile);
            imageButton.ImageUrl = "~/Data/" + fi.Name;
            imageButton.Height = Unit.Pixel(100);
            imageButton.Style.Add("padding", "5px");
            imageButton.Width = Unit.Pixel(100);
            imageButton.Click += new ImageClickEventHandler(imageButton_Click);
            Panel1.Controls.Add(imageButton);
        }
    }

    protected void imageButton_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("WebForm2.aspx?ImageURL=" + 
            ((ImageButton)sender).ImageUrl);
    }
}

WebForm2.aspx
<asp:Button ID="Button2" Text="Back to Gallery" runat="server" onclick="Button1_Click" />
<br /><br />
<asp:Image ID="Image1" Width="800px" Height="550px" runat="server" />
<br /><br />
<asp:Button ID="Button1" Text="Back to Gallery" runat="server" onclick="Button1_Click" />

WebForm2.aspx.cs
public partial class WebForm2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Image1.ImageUrl = Request.QueryString["ImageURL"];
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("WebForm1.aspx");
    }
} 
