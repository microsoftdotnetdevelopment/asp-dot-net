<%@ Page Language="C#" AutoEventWireup="true" CodeFile="quote.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,100%7CRoboto:400,700,300,100' rel='stylesheet' type='text/css'/>
     <link href="css/font-awesome.css" rel="stylesheet"/>
     <link href="css/bootstrap.min.css" rel="stylesheet"/>
     <link href="css/style.default.css" rel="stylesheet" />
     <link href="css/custom.css" rel="stylesheet"/>
     <link href="css/owl.carousel.css" rel="stylesheet"/>
     <link href="css/owl.theme.css" rel="stylesheet"/>
     <link href="css/animate.css" rel="stylesheet"/>
     <link rel="shortcut icon" href="favicon.png"/>


   <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
   <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
   <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>
   <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
   <link href="css/grayscale.min.css" rel="stylesheet"/>
  <script src="js/modernizr-2.6.2.min.js"></script>
    <title>My Quotes</title>
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
        <br />
        <br />
        <br />
      <h1 style="text-align:center">My favourite Quote collection</h1>
     <ul class="owl-carousel testimonials same-height-row" data-animate="fadeInUp">
         
                        <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Setting small targets is much better than setting huge goals that you cannot achieve. Remember that "small drops of water make the mighty ocean".</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                        <%--<img class="" alt="" src="img/person-1.jpg">
                                        <h5>John McIntyre</h5>
                                        <p>CEO, TransTech</p>--%>
                                    </div>
                                </div>
                            </div>
                        </li>
          <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>To shine like a sun you need to Burn like that.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
          <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Instead of managing your time, think of managing your energy or attention.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                     
                                    </div>
                                </div>
                            </div>
                        </li>
          <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Success comes from hard work and dedication. </p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                      
                                    </div>
                                </div>
                            </div>
                        </li>
          <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Time + patience + effort=success </p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                    
                                    </div>
                                </div>
                            </div>
                        </li>
     
          </ul>
         <ul class="owl-carousel testimonials same-height-row" data-animate="fadeInUp">
         <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Humility is the true key to success.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
             <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Imagination is more important than knowledge. knowledge is limited .If you see it in your mind hold it in your hand .if you have Seen it here and you have the courage to speak it will happen.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
             <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Limitation exist in our mind and if you start using imagination then your possibilities become limitless.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
             <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Strength does not come from physical capacity. It comes from an indomitable(undefended or impossible to defeat) will.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
             <li class="item">
                            <div class="testimonial same-height-always">
                                <div class="text">
                                    <p>Little hope is effective and more hope is dangerous.</p>
                                </div>
                                <div class="bottom">
                                    <div class="icon"><i class="fa fa-quote-left"></i>
                                    </div>
                                    <div class="name-picture">
                                       
                                    </div>
                                </div>
                            </div>
                        </li>
             </ul>
        

      

       
     <script src="vendor/jquery/jquery.js"></script>
     <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
     <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>
     <script src="js/grayscale.min.js"></script>
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <!-- for demo purpose -->
    <script src="js/jquery.cookie.js"></script>

    <!-- waypoints for scroll spy -->
    <script src="js/waypoints.min.js"></script>

    <!-- maps -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
    <script src="js/gmaps.js"></script>

    <!-- masonry layout -->
    <script src="js/masonry.pkgd.min.js"></script>

    <!-- owl carousel -->
    <script src="js/owl.carousel.min.js"></script>


    <!-- jQuery scroll to -->
    <script src="js/jquery.scrollTo.min.js"></script>

    <!-- jQuery counter -->
    <script src="js/jquery.counterup.min.js"></script>

    <!-- jQuery parallax -->
    <script src="js/jquery.parallax-1.1.3.js"></script>

    <!-- main js file -->

    <script src="js/front.js"></script>
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
