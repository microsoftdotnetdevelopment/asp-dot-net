View State
In general we can say it is used for storing user data in ASP.NET, sometimes in ASP.NET applications the user wants to maintain or store their data temporarily
after a post-back.In this case VIEW STATE is the most used and preferred way of doing that.
View State provides page level state management i.e., as long as the user is on the current page, state is available and the user redirects to the next page 
and the current page state is lost. 
View State can store any type of data because it is object type but it is preferable not to store a complex type of data due to the need for serialization and 
deserilization on each post back.
ViewState of a webform is available only with in that webform, by default.
ViewState is stored on the page using a hidden field called _ViewState

if(!Ispostback) //if it is a get request

Ex:1-
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        if (ViewState["Clicks"] == null)
        {
            ViewState["Clicks"] = 0;
        }
        TextBox1.Text = ViewState["Clicks"].ToString();
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    int ClicksCount = (int)ViewState["Clicks"] + 1;
    TextBox1.Text = ClicksCount.ToString();
    ViewState["Clicks"] = ClicksCount;
}
.........
textbox
button
---------------------------------------------------------------
protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            if (ViewState["count"] != null)
            {
                int ViewstateVal = Convert.ToInt32(ViewState["count"]) + 1;
                Label1.Text = ViewstateVal.ToString();
                ViewState["count"] = ViewstateVal.ToString();
            }
            else
            {
                ViewState["count"] = "1";
            }
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Text = ViewState["count"].ToString();
    }
..........
label
button
