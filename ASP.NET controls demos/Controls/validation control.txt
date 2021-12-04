RequiredFieldValidator
CompareValidator 
RangeValidator  
RegularExpressionValidator 
CustomValidator 
ValidationSummary 

<div>
    Your name:<br />
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="error" ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
    <br /><br />
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
       
    </div>
on button event
if(Page.IsValid)
    {
        btnSubmitForm.Text = "My form is valid!";
    }
------------------------------------------
 <div>
   Small number:<br />
<asp:TextBox runat="server" id="txtSmallNumber" /><br /><br />
Big number:<br />
<asp:TextBox runat="server" id="txtBigNumber" ControlToCompare="txtBigNumber" /><br />
        <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="CompareValidator" ControlToValidate="txtSmallNumber"  ControlToCompare="txtBigNumber" Operator="LessThan" Type="Integer">

        </asp:CompareValidator>
        <asp:Button ID="Button1" runat="server" Text="Button"  OnClick="Button1_Click"  />
       
    </div>
------------------------------------------------
we can use this to validate both numbers, strings and dates,
<div>
  Date:<br />
<asp:TextBox runat="server" id="txtDate" />
        <asp:RangeValidator ID="RangeValidator1" runat="server" ErrorMessage="RangeValidator" ControlToValidate="txtDate"  MinimumValue="01-01-2006" MaximumValue="31-12-2006" Type="Date"></asp:RangeValidator>
<br /><br />
        <asp:Button ID="Button1" runat="server" Text="Button" />
    </div>

------------------------------------------------------
 <div>
  4 digit number:<br />
<asp:TextBox runat="server" id="txtNumber" />
        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="RegularExpressionValidator" ControlToValidate="txtNumber" ValidationExpression="^[0-9]{4}$"></asp:RegularExpressionValidator>
<br /><br />
        <asp:Button ID="Button1" runat="server" Text="Button" />
    </div>
----------------------------------------------------
Custom text:<br />
<asp:TextBox runat="server" id="txtCustom" />
        <asp:CustomValidator ID="CustomValidator1" runat="server" ErrorMessage="CustomValidator" OnServerValidate="CustomValidator1_ServerValidate"  ControlToValidate="txtCustom" ></asp:CustomValidator>
<br /><br />
        <asp:Button ID="Button1" runat="server" Text="Button" />

protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
    {
        if (args.Value.Length == 8)
            args.IsValid = true;
        else
            args.IsValid = false;
    }
-----------------------------------------------
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
   <table style="width:66%;">   
      <tr>
         <td class="style1" colspan="3">
         <asp:Label ID="lblmsg" Text="President Election Form : Choose your president" runat="server" />
         </td>
      </tr>
      <tr>
         <td class="style3">
            Candidate:
         </td>
         <td class="style2">
            <asp:DropDownList ID="ddlcandidate" runat="server"  style="width:239px">
               <asp:ListItem>Please Choose a Candidate</asp:ListItem>
               <asp:ListItem>M H Kabir</asp:ListItem>
               <asp:ListItem>Steve Taylor</asp:ListItem>
               <asp:ListItem>John Abraham</asp:ListItem>
               <asp:ListItem>Venus Williams</asp:ListItem>
            </asp:DropDownList>
         </td>

         <td>
            <asp:RequiredFieldValidator ID="rfvcandidate" 
               runat="server" ControlToValidate ="ddlcandidate"
               ErrorMessage="Please choose a candidate" 
               InitialValue="Please choose a candidate">
            </asp:RequiredFieldValidator>
         </td>
      </tr>

      <tr>
         <td class="style3">
            House:
         </td>

         <td class="style2">
            <asp:RadioButtonList ID="rblhouse" runat="server" RepeatLayout="Flow">
               <asp:ListItem>Red</asp:ListItem>
               <asp:ListItem>Blue</asp:ListItem>
               <asp:ListItem>Yellow</asp:ListItem>
               <asp:ListItem>Green</asp:ListItem>
            </asp:RadioButtonList>
         </td>

         <td>
            <asp:RequiredFieldValidator ID="rfvhouse" runat="server" 
               ControlToValidate="rblhouse" ErrorMessage="Enter your house name" >
            </asp:RequiredFieldValidator>
            <br />
         </td>
      </tr>

      <tr>
         <td class="style3">
            Class:
         </td>

         <td class="style2">
            <asp:TextBox ID="txtclass" runat="server"></asp:TextBox>
         </td>

         <td>
            <asp:RangeValidator ID="rvclass" 
               runat="server" ControlToValidate="txtclass" 
               ErrorMessage="Enter your class (6 - 12)" MaximumValue="12" 
               MinimumValue="6" Type="Integer">
            </asp:RangeValidator>
         </td>
      </tr>

      <tr>
         <td class="style3">
            Email:
         </td>

         <td class="style2">
            <asp:TextBox ID="txtemail" runat="server" style="width:250px">
            </asp:TextBox>
         </td>

         <td>
            <asp:RegularExpressionValidator ID="remail" runat="server" 
               ControlToValidate="txtemail" ErrorMessage="Enter your email" 
               ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
            </asp:RegularExpressionValidator>
         </td>
      </tr>

      <tr>
         <td class="style3"  colspan="3">
            <asp:Button ID="btnsubmit" runat="server" onclick="btnsubmit_Click" 
               style="text-align: center" Text="Submit"  />
         </td>
      </tr>
   </table>
   <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
      DisplayMode ="BulletList" ShowSummary ="true" HeaderText="Errors:" />
</form>
</body>
</html>
--------------------------------------------------------------------------------------
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Label ID="Label7" runat="server" Text="Synapse" Font-Size="X-Large"></asp:Label><br />
        <asp:Label ID="Label1" runat="server" Text="username"></asp:Label><br />
        <asp:TextBox ID="txtun" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="enter username" ControlToValidate="txtun"></asp:RequiredFieldValidator><br />
        <asp:Label ID="Label2" runat="server" Text="password"></asp:Label><br />
        <asp:TextBox ID="txtpw" runat="server" TextMode="Password"></asp:TextBox>
         <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Enter password" ControlToValidate="txtpw"></asp:RequiredFieldValidator><br />
        <asp:Label ID="Label3" runat="server" Text="Confirm password"></asp:Label><br />
        <asp:TextBox ID="txtconpw" runat="server" TextMode="Password"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Enter confirm pass" ControlToValidate="txtconpw"></asp:RequiredFieldValidator>
        <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="Enter same password" ControlToValidate="txtconpw" ControlToCompare="txtpw" Operator="Equal" Type="String"></asp:CompareValidator><br />
        <asp:Label ID="Label4" runat="server" Text="EmailId"></asp:Label><br />
        <asp:TextBox ID="txtem" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="enter email" ControlToValidate="txtem"></asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="Enter correct email id"  ControlToValidate="txtem" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator><br />
        <asp:Label ID="Label5" runat="server" Text="Age"></asp:Label><br />
        <asp:TextBox ID="txtage" runat="server" TextMode="Number"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="enter your age" ControlToValidate="txtage"></asp:RequiredFieldValidator>
        <asp:RangeValidator ID="RangeValidator1" runat="server" ErrorMessage="Enter age between 18 and 30" ControlToValidate="txtage" Type="Integer" MinimumValue="18" MaximumValue="30"></asp:RangeValidator><br />
        <asp:Label ID="Label6" runat="server" Text="Mobile No."></asp:Label><br />
        <asp:TextBox ID="txtmob" runat="server" TextMode="Number"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="enter your mob" ControlToValidate="txtmob"></asp:RequiredFieldValidator><br />
        <asp:Button ID="Button1" runat="server" Text="Signup"   OnClick="Button1_Click" /><br />
        <asp:ValidationSummary ID="ValidationSummary1" runat="server" DisplayMode="BulletList" ShowSummary="True" HeaderText="Errors:" />
        <asp:Label ID="Label8" runat="server" Text=""></asp:Label>
</form>
</body>
</html>

