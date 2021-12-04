You can triger the redirect programmatically in client script or server code. 
In client script-
Default.aspx
<head runat="server">
    <title></title>
    <script type="text/javascript">
        function submit_by_id() {
            if (validation())
                // Calling validation function        
            { 
form1.submit();
 }
        }
        function validation() {
            var name = document.getElementById("TextBox1").value;
            var email = document.getElementById("TextBox2").value; 
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if (name === '' || email === '') { 
            alert("Please fill all fields...!!!!!!"); 
            return false; }
            else if (!(email).match(emailReg)) { 
            alert("Invalid Email...!!!!!!"); 
            return false; }
            else { 
            return true; }
        }

    </script>
</head>
<body>
    <form id="form1" runat="server" action="result.aspx" method="get">
        <div id="div1" runat="server">
            User ID :
            <br />
            <asp:TextBox ID="TextBox1" runat="server" EnableViewState="False"></asp:TextBox>
            <br />
            <br />
            Email ID :
            <br />
            <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
            <br />
            <br />
            <input type="button" value="Submit" onclick="submit_by_id()" />
            <br />
            <br />
            <br />
        </div>
    </form>
</body>
</html>
..........
result.aspx.cs
 protected void Page_Load(object sender, EventArgs e)
    {
        //In case of GET    
        string eid = Request.QueryString["TextBox1"].ToString();
        string passwd = Request.QueryString["TextBox2"].ToString();
        //In case of POST        
        //string eid = Request.Form["id"].ToString();
        //string passwd = Request.Form["password"].ToString();
        Response.Write("<h1>Welcome User , Your Registration is Done below are the details</h1> <br/>"); 
        Response.Write(" <br/>");
        Response.Write(" <b> ID :  " + eid + " </b> <br/>"); 
        Response.Write(" <b> Email ID :  " + passwd + " </b> <br/><br/>"); 
        Response.Write("It is <b>" + Request.HttpMethod + " </b> Request from user ");
    }

-------------------------------------------------------------------------------
In server code
Default.aspx
<form id="form1" runat="server" >
        <div id="div1" runat="server">User ID :
            <br />
            <asp:TextBox ID="TextBox1" runat="server" EnableViewState="False"></asp:TextBox>
            <br />
            <br />
            Password :
            <br />
            <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click"    />
            <br />
            <br />
            <br />
        </div>
    </form>
Default.aspx.cs
  protected void Button1_Click(object sender, EventArgs e)
    {

        string url = "~/result.aspx?id=" + TextBox1.Text + "&password=" + TextBox2.Text;
        Response.Redirect(url);
    }


result.aspx.cs
page_load
        string eid = Request.QueryString["id"].ToString();
        string passwd = Request.QueryString["password"].ToString();
        Response.Write("<h1>Welcome User , Your Registration is Done below are the details</h1> <br/>");
        Response.Write(" <br/>"); 
        Response.Write(" <b> ID :  " + eid + " </b> <br/>"); 
        Response.Write(" <b> PASSWORD :  " + passwd + " </b> <br/>");
        Response.Write("It is <b>" + Request.HttpMethod + " </b> Request from user ");

-------------------------------------------------------------------------
 <form id="form1" runat="server"> 
   <div id="div1" runat="server">     
   First Name : <br />     
   <asp:TextBox ID="TextBox1" runat="server" ></asp:TextBox>        <br />        <br /> 
       Last Name : <br />    
    <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>      <br />        <br />
          <asp:Button ID="Button1" runat="server" Text="Button"             onclick="Button1_Click"  />            <br />        <br />        <br />    
    </div>    </form> 

............
 protected void Button1_Click(object sender, EventArgs e)    {  
      Server.Transfer("~/result.aspx");    }
