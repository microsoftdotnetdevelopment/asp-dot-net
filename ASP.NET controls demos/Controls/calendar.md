<asp:Calendar ID="Calendar1" runat="server"></asp:Calendar>
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        <asp:Button ID="Button1" runat="server" Text="Button"   OnClick="Button1_Click" />
//get date
rotected void Button1_Click(object sender, EventArgs e)
    {
        Label1.Text = Calendar1.SelectedDate.ToShortDateString();
    }
}

//show date
 Calendar1.VisibleDate = DateTime.Parse("6/1/2014");

//set date
Calendar1.SelectedDate = DateTime.Parse("6/1/2014");

Find days between two dates-
if(cal1.selecteddate>cal2.selecteddate){
result.tet=cal1.selecteddate.subtract(cal2.selecteddate).totaldays.tostring();

//
datetime y=datetime.now;
passing a datatime by using datetime.parse
datetime val=datetime.parse("12/7/2017");
result.text="val.TolongDateString