using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Net;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        //SqlConnection con = new SqlConnection();
        //con.ConnectionString = "Data Source=SUNNY;Initial catalog=Portfolio;Integrated security=true";

        //string query = "insert cont values(@name,@email,@subject,@message)";

        //SqlCommand cmd = new SqlCommand(query, con);
        //con.Open();

        //cmd.Parameters.AddWithValue("@name", txtname.Text);
        //cmd.Parameters.AddWithValue("@email",txtemail.Text);
        //cmd.Parameters.AddWithValue("@subject", txtsubject.Text);
        //cmd.Parameters.AddWithValue("@message", txtmessage.Text);

        //cmd.ExecuteNonQuery();
        //con.Close();
        //Response.Write("success");
        //MailMessage mm = new MailMessage("sunny.gp07@gmail.com", "sunnyvales789@gmail.com");
        //mm.Subject = txtsubject.Text;
        //mm.Body = "Name: " + txtname.Text + "<br /><br />Email: " + txtemail.Text + "<br />" + txtmessage.Text;
        ////if (FileUpload1.HasFile)
        ////{
        ////    string FileName = System.IO.Path.GetFileName(FileUpload1.PostedFile.FileName);
        ////    mm.Attachments.Add(new Attachment(FileUpload1.PostedFile.InputStream, FileName));
        ////}
        //mm.IsBodyHtml = true;
        //SmtpClient smtp = new SmtpClient();
        //smtp.Host = "smtp.gmail.com";
        //smtp.EnableSsl = true;
        //System.Net.NetworkCredential NetworkCred = new System.Net.NetworkCredential();
        //NetworkCred.UserName = "sunny.gp07@gmail.com";
        //NetworkCred.Password = "Sunny123";
        //smtp.UseDefaultCredentials = true;
        //smtp.Credentials = NetworkCred;
        //smtp.Port = 587;
        //smtp.Send(mm);
        //Label1.Text = "Email Sent SucessFully.";
      
                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("sunny.gp07@gmail.com");
                mailMessage.To.Add("sunny.gp07@gmail.com");
                mailMessage.Subject = txtsubject.Text;

                mailMessage.Body = "<b>Sender Name : </b>" + txtname.Text + "<br/>"
                    + "<b>Sender Email : </b>" + txtemail.Text + "<br/>"
                    + "<b>Comments : </b>" + txtmessage.Text;
                mailMessage.IsBodyHtml = true;


                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.EnableSsl = true;
                smtpClient.Credentials = new
                    System.Net.NetworkCredential("sunny.gp07@gmail.com", "Sunny123");
                smtpClient.Send(mailMessage);

                Label1.ForeColor = System.Drawing.Color.Blue;
                Label1.Text = "Thank you for contacting us";

                txtname.Enabled = false;
                txtemail.Enabled = false;
                txtsubject.Enabled = false;
                txtmessage.Enabled = false;
                Button1.Enabled = false;
            }
    

}