<%@ Page Language="C#" AutoEventWireup="true" CodeFile="connect.aspx.cs" Inherits="connect" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
   <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
   <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>
   <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
   <link href="css/grayscale.min.css" rel="stylesheet"/>
   <link href="css/bootstrap.min.css" rel="stylesheet"/>
   <link href="css/landing-page.css" rel="stylesheet"/>
   <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
   <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" />
<title>Connect with me</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-play-circle"></i> <span class="light">Sunny</span> Vale
                </a>
            </div>
             <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="Home.aspx">Home</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="Home.aspx#aboutme">About Me</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="mywork.aspx">MyWork</a>
                    </li>
					 <li>
                        <a class="page-scroll" href="quote.aspx">Quotes</a>
                    </li>
                     <li>
                        <a class="page-scroll" href="Home.aspx#skill">Skills</a>
                    </li>
                      <li>
                        <a class="page-scroll" href="Home.aspx#contact">Contact</a>
                    </li>
                     <li>
                        <a class="page-scroll" href="#skill">MyBlog</a>
                    </li>
                      <li>
                        <a class="page-scroll" href="Connect.aspx">Connect</a>
                    </li>
                       <li>
                        <a class="page-scroll" href="certificates.aspx">Certificates</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
         <a name="about"></a>
    <div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Hey, I'm Sunny ;)</h1>
                        <h3>you can connect with me on </h3>
                        <hr class="intro-divider"/>
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="https://twitter.com/Sunny_g001" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/sunny7899" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sunnygupta001/" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/sunnygupta.shivam" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                            </li>
                            <li>
                                <a href="https://www.quora.com/profile/Sunny-Gupta-208" class="btn btn-default btn-lg"><i class="fa fa-quora" aria-hidden="true"></i> <span class="network-name">Quora</span></a>
                            </li>
                            <li>
                                <a href="https://medium.com/@sunnyvales789" class="btn btn-default btn-lg"><i class="fa fa-medium fa-fw"></i> <span class="network-name">Medium</span></a>
                            </li>
                        </ul>
                         <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="https://the-sunnyvale.tumblr.com/" class="btn btn-default btn-lg"><i class="fa fa-tumblr fa-fw"></i> <span class="network-name">Tumblr</span></a>
                            </li>
                            <li>
                                <a href="http://stackoverflow.com/users/5792947/sunny-g" class="btn btn-default btn-lg"><i class="fa fa-stack-overflow" aria-hidden="true"></i> <span class="network-name">Stack Overflow</span></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCfImJpdqaewyCfYlXxbxmBw" class="btn btn-default btn-lg"><i class="fa fa-youtube fa-fw"></i> <span class="network-name">Youtube</span></a>
                            </li>
                           <%-- <li>
                                <a href="#" class="btn btn-default btn-lg"><i class="fa fa-snapchat fa-fw"></i> <span class="network-name">snapchat</span></a>
                            </li>--%>
                            <li>
                                <a href="https://www.instagram.com/sunny_g_007/" class="btn btn-default btn-lg"><i class="fa fa-instagram fa-fw"></i> <span class="network-name">Instagram</span></a>
                            </li>
                            <li>
                                <a href="https://in.pinterest.com/sunnyvales789/" class="btn btn-default btn-lg"><i class="fa fa-pinterest" aria-hidden="true"></i> <span class="network-name">PinInterest</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        </div>

     <script src="vendor/jquery/jquery.js"></script>
     <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
     <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>
     <script src="js/grayscale.min.js"></script>
     <script src="js/jquery.js"></script>
     <script src="js/bootstrap.min.js"></script>
           <script>
var message="";
///////////////////////////////////
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false")
     </script>
    </div>
    </form>
</body>
</html>
