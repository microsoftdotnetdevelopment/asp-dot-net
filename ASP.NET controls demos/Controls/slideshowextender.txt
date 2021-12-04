<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
.............
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
        <asp:Image ID="Image1" runat="server"  Width="400px" Height="400px"  />
        <cc1:SlideShowExtender ID="Image1_SlideShowExtender" runat="server" SlideShowServiceMethod="GetSlides" 
           TargetControlID="Image1" ImageDescriptionLabelID="Label1" Loop="true" NextButtonID="btnnext"  PreviousButtonID="btnprev"/>

        <asp:Label ID="Label1" runat="server" ></asp:Label><br />
        <asp:Button ID="btnprev" runat="server" Text="Prev"   />
        <asp:Button ID="btnnext" runat="server" Text="Next"   />

 }
..............
    [System.Web.Services.WebMethod]
    [System.Web.Script.Services.ScriptMethod]


    public static Slide[] GetSlides()
    {
        Slide[] slides = new Slide[5];
        slides[0] = new Slide("images/1.jpg", "First image of my album","First image" );
        slides[1] = new Slide("images/2.jpg", "Second image of my album", "Second Image");
        slides[2] = new Slide("images/3.jpg", "Third image of my album", "Third Image");
        slides[3] = new Slide("images/4.jpg", "Fourth image of my album", "Fourth Image");
        slides[4] = new Slide("images/5.jpg", "Fifth image of my album", "Fifth Image");
       
        return (slides);
    }
-----------------------------------------------------------
<ajaxToolkit:SlideShowExtender ID="slideShowExtender1" runat="Server" TargetControlID="image1"
ImageDescriptionLabelID="lableImageDetail" Loop="true" AutoPlay="true" StopButtonText="Stop" 
PlayButtonText="Play" NextButtonID="buttonNext" PreviousButtonID="buttonPrev"
PlayButtonID="buttonPlay" SlideShowServiceMethod="GetSlides" />
    </form>
<asp:Button ID="buttonPlay" runat="server" Text="Play" Width="80px" />

