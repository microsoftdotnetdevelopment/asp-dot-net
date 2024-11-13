<asp:Label ID="Label2" runat="server" BackColor="Coral" ForeColor="blue" BorderColor="ActiveBorder" BorderStyle="dashed" BorderWidth="1" Height="20" 
                        Text="Example of Label Control" Width="200"
                        ></asp:Label>

protected void ChangeLabelText(object sender, EventArgs e)
                        {
                            Label1.Text = TextBox1.Text;
                        }