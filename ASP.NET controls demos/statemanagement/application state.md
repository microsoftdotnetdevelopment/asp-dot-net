Application state variables are available across all pages and across all session.
Application state variables are like multi-user global data.
they are stored on the web server.

ApplicationState2.aspx.cs
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        if (Application["Clicks"] == null)
        {
            Application["Clicks"] = 0;
        }
        TextBox1.Text = Application["Clicks"].ToString();
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    int ClicksCount = (int)Application["Clicks"] + 1;
    TextBox1.Text = ClicksCount.ToString();
    Application["Clicks"] = ClicksCount;
}
.......
textbox
button

ApplicationState1.aspx.cs
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        if (Application["Clicks"] == null)
        {
            Application["Clicks"] = 0;
        }
        TextBox1.Text = Application["Clicks"].ToString();
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    int ClicksCount = (int)Application["Clicks"] + 1;
    TextBox1.Text = ClicksCount.ToString();
    Application["Clicks"] = ClicksCount;
}
.........
textbox
button


