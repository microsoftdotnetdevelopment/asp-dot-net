
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <div>
      <asp:AdRotator ID="AdRotator1" runat="server"  AdvertisementFile="~/slider.xml"/>
        <asp:Timer ID="Timer1" runat="server" Interval="2500"></asp:Timer>
    </div>
..............
xml file code-
<?xml version="1.0" encoding="utf-8" ?>
<Advertisements>
  <Ad>
    <ImageUrl>img/3.jpg</ImageUrl>
  </Ad>
 <Ad>
    <ImageUrl>img/4.jpeg</ImageUrl>
  </Ad>
 <Ad>
    <ImageUrl>img/5.jpg</ImageUrl>
  </Ad>
</Advertisements>
............
<Advertisements>
   <Ad>
      <ImageUrl>images/banner1.gif</ImageUrl>
      <NavigateUrl>http://www.microsoft.com</NavigateUrl>
      <AlternateText>Microsoft.com</AlternateText>
      <Keyword>Computers</Keyword>
      <Impressions>80</Impressions>
   </Ad>
</Advertisements>
ImageUrl	An absolute or relative URL to the ad image file.
NavigateUrl	The Web location to navigate to when the image is clicked. If NavigateUrl is not set, the image is not clickable.
AlternateText	The text to render as the ALT attribute of the image. When the page is viewed with Microsoft Internet Explorer, this acts as a ToolTip for the ad.