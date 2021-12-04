sending emails-
for smtpclient the company that supplies your with Internet access, will usually have an SMTP server that you can use,
protected void Page_Load(object sender, EventArgs e)
{
    try
    {
        MailMessage mailMessage = new MailMessage();
        mailMessage.To.Add("your.own@mail-address.com");
        mailMessage.From = new MailAddress("another@mail-address.com");
        mailMessage.Subject = "ASP.NET e-mail test";
        mailMessage.Body = "Hello world,\n\nThis is an ASP.NET test e-mail!";
        SmtpClient smtpClient = new SmtpClient("smtp.your-isp.com");
        smtpClient.Send(mailMessage);
        Response.Write("E-mail sent!");
    }
    catch(Exception ex)
    {
        Response.Write("Could not send the e-mail - error: " + ex.Message);
    }
}
You can attach one or several files
mailMessage.Attachments.Add(new Attachment(Server.MapPath("~/image.jpg")));
In this example, we attach a file called "image.jpg", located in the root of the ASP.NET website:

You can send to more than one person at the same time
mailMessage.To.Add("your.own@mail-address.com");
mailMessage.To.Add("another@mail-address.com");

You can set a name for the sender 
mailMessage.From = new MailAddress("me@mail-address.com", "My Name");

You can send HTML e-mails, 
mailMessage.IsBodyHtml = true;
mailMessage.Body = "Hello <b>world!</b>";

You can use the CC and BCC fields
mailMessage.CC.Add("me@mail-address.com");
mailMessage.Bcc.Add("me2@mail-address.com");

You can set the priority of an e-mail,
mailMessage.Priority = MailPriority.High;