Cookies can  be used to send data from one webform to another.
Cookies can be broadly classified into 2 types
1. Persistent cookies - 
Remain on the client computer, even after the browser is closed. 
You can configure how long the cookies remain using the expires property of the HttpCookie object.
2. Non-Persistent cookies - 
If you don't set the Expires property, then the cookie is called as a Non-Persistent cookie.
Non-Persistent cookies only remain in memory until the browser is closed.

Webform1.aspx
label
textbox
label
textbox
button
.....
protected void btnSendData_Click(object sender, EventArgs e)
{
    // Create the cookie object
    HttpCookie cookie = new HttpCookie("UserDetails");
    cookie["Name"] = txtName.Text;
    cookie["Email"] = txtEmail.Text;
    // Cookie will be persisted for 30 days
    cookie.Expires = DateTime.Now.AddDays(30);
    // Add the cookie to the client machine
    Response.Cookies.Add(cookie);

    Response.Redirect("WebForm2.aspx");
} 

---------------------
webform2.aspx
label
label

WebForm2.aspx.cs Code:
protected void Page_Load(object sender, EventArgs e)
{
    HttpCookie cookie = Request.Cookies["UserDetails"];
    if (cookie != null)
    {
        lblName.Text = cookie["Name"];
        lblEmail.Text = cookie["Email"];
    }
} 
