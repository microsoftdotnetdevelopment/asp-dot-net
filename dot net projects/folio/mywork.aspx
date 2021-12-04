<%@ Page Language="C#" AutoEventWireup="true" CodeFile="mywork.aspx.cs" Inherits="mywork" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <link href="css/bootstrap.min.css" rel="stylesheet"/>
     <link href="css/portfolio-item.css" rel="stylesheet"/>
    <title>My Work</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <!-- Page Content -->
         <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-play-circle"></i> <span class="light">Sunny</span>Vale
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
    <div class="container">

        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Online News Portal
                    <small>5-2-2017</small>
                </h1>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">

            <div class="col-md-8">
                <img class="img-responsive" src="img/nws.png" alt="">
            </div>

            <div class="col-md-4">
                <h3>Project Description</h3>
                <p>  It is a Portal where user can browse, share and can discuss via commenting over the news, issues                             and various topics. It also provides newsfeed to registered users to let them be updated. </p>
                <h3>Technologies used</h3>
                <ul>
                    <li>C#</li>
                    <li>ASP.NET</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

        </div>
        <!-- /.row -->

        <!-- Related Projects Row -->
        <div class="row">

            <div class="col-lg-12">
                <h3 class="page-header">Other Projects</h3>
            </div>

            <div class="col-sm-3 col-xs-6">
                <a href="#">
                    <img class="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="">
                </a>
            </div>

            <div class="col-sm-3 col-xs-6">
                <a href="#">
                    <img class="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="">
                </a>
            </div>

            <div class="col-sm-3 col-xs-6">
                <a href="#">
                    <img class="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="">
                </a>
            </div>

            <div class="col-sm-3 col-xs-6">
                <a href="#">
                    <img class="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="">
                </a>
            </div>

        </div>
        <!-- /.row -->

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                 <%--   <p>Copyright &copy; Your Website 2014</p>--%>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
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
