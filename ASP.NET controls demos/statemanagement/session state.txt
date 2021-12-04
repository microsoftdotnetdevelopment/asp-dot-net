Session management is a very strong technique to maintain state.
Generally session is used to store user's information and/or uniquely identify a user (or say browser). 
The server maintains the state of user information by using a session ID.
When users makes a request without a session ID, ASP.NET creates a session ID and sends it with every request and response to the same user.
session state data is actually stored among all webforms.
Session state variables are available across all pages, but only for a given single session. Session variables are like single-user global data.
Session state variables are stored on the web server.
SessionState variables are cleared, when the user session times out. The default is 20 minutes. This is configurable in web.config
A single user can have multiple sessions, by visiting your application,

There are four session storage mechanisms provided by ASP.NET:
1-In Proc mode 
State Server mode  
SQL Server mode 
Custom mode 

1-
In proc mode is the default mode provided by ASP.NET. In this mode, session values are stored in the web server's memory (in IIS). 
If there are more than one IIS servers then session values are stored in each server separately on which request has been made.
Since the session values are stored in server, whenever server is restarted the session values will be lost.  

sessionstate1.aspx
textbox
button
........
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        if (Session["Clicks"] == null)
        {
            Session["Clicks"] = 0;
        }
        TextBox1.Text = Session["Clicks"].ToString();
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    int ClicksCount = (int)Session["Clicks"] + 1;
    TextBox1.Text = ClicksCount.ToString();
    Session["Clicks"] = ClicksCount;
}
.................................................
sessiostate2.aspx
textbox
button
......
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        if (Session["Clicks"] == null)
        {
            Session["Clicks"] = 0;
        }
        TextBox1.Text = Session["Clicks"].ToString();
    }
}

protected void Button1_Click(object sender, EventArgs e)
{
    int ClicksCount = (int)Session["Clicks"] + 1;
    TextBox1.Text = ClicksCount.ToString();
    Session["Clicks"] = ClicksCount;
}

-----------------------------------------------------
include this in system.web
<sessionState mode="InProc" cookieless="true"></sessionState> //in this session id is generated
In this you can also add a timeout property.By default it is 20 minutes.

<sessionState mode="InProc" cookieless="true" timeout="1"></sessionState>

<sessionState mode="InProc" cookieless="false"></sessionState>  //in this id is not generated