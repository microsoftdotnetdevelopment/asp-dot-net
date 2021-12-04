1. Querystrings are name/value collection pairs
2. Using querystrings, is a very comman way to send data from one webform to another.
3. Query strings are appended to the page URL.
4. ?(Question Mark), indicates the beginning of a query string and it's value.
5. It is possible to use more than one query string. The first query string is specified using the ?(question mark). 
Subsequent query strings can be appended to the URL using the &(ampersand) symbol.
6. There is a limit on the Query string length. Hence, Query strings cannot be used to send very long data.
7. Query strings are visible to the user, hence should not be used to send sensitive information, unless encrypted.
8. To read the query string value, use Request object's QueryString property.
9. &(ampersand) is used to concatenate query strings, so if you want to send &, as value for the query string there are 2 ways, as shown below

webform1.aspx
label
textbox
label
textbox
button
.......
Protected void btnSendData_Click(object sender, EventArgs e)
{
    //Using Server.UrlEncode to encode &(ampersand)
    //Response.Redirect("WebForm2.aspx?UserName=" + Server.UrlEncode(txtName.Text) + 
    //    "&UserEmail=" + Server.UrlEncode(txtEmail.Text));
    //Using String.Replace() function to replace &(ampersand) with %26 

    Response.Redirect("WebForm2.aspx?UserName=" + txtName.Text.Replace("&", "%26") + "&UserEmail=" + txtEmail.Text.Replace("&", "%26"));
}

............................
webform2.aspx
label
label
.......
protected void Page_Load(object sender, EventArgs e)
{
    // Read the QueryString values 
    lblName.Text = Request.QueryString["UserName"];
    lblEmail.Text = Request.QueryString["UserEmail"];
} 