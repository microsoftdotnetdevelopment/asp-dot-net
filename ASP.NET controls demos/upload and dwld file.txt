WebForm1.aspx code:
<div style="font-family:Arial">
<asp:FileUpload ID="FileUpload1" runat="server" />
<asp:Button ID="Button1" runat="server" Text="Upload" 
    OnClick="Button1_Click" />
<br />
<br />
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
    OnRowCommand="GridView1_RowCommand" BackColor="White" 
    BorderColor="#CC9966" BorderStyle="None" 
    BorderWidth="1px" CellPadding="4">
    <Columns>
        <asp:TemplateField HeaderText="File" ShowHeader="False">
            <ItemTemplate>
                <asp:LinkButton ID="LinkButton1" runat="server" 
                    CausesValidation="False" 
                    CommandArgument='<%# Eval("File") %>'
                    CommandName="Download" Text='<%# Eval("File") %>'>
                    </asp:LinkButton>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:BoundField DataField="Size" HeaderText="Size in Bytes" />
        <asp:BoundField DataField="Type" HeaderText="File Type" />
    </Columns>
    <FooterStyle BackColor="#FFFFCC" ForeColor="#330099" />
    <HeaderStyle BackColor="#990000" Font-Bold="True" 
        ForeColor="#FFFFCC" />
    <PagerStyle BackColor="#FFFFCC" ForeColor="#330099" 
        HorizontalAlign="Center" />
    <RowStyle BackColor="White" ForeColor="#330099" />
    <SelectedRowStyle BackColor="#FFCC66" Font-Bold="True" 
        ForeColor="#663399" />
    <SortedAscendingCellStyle BackColor="#FEFCEB" />
    <SortedAscendingHeaderStyle BackColor="#AF0101" />
    <SortedDescendingCellStyle BackColor="#F6F0C0" />
    <SortedDescendingHeaderStyle BackColor="#7E0000" />
</asp:GridView>
</div>

WebForm1.aspx.cs code:
protected void Button1_Click(object sender, EventArgs e)
{
    if (FileUpload1.HasFile)
    {
        string fileName = FileUpload1.FileName;
        FileUpload1.PostedFile
            .SaveAs(Server.MapPath("~/Data/") + fileName);
    }

    DataTable dt = new DataTable();
    dt.Columns.Add("File");
    dt.Columns.Add("Size");
    dt.Columns.Add("Type");

    foreach (string strfile in Directory.GetFiles(Server.MapPath("~/Data")))
    {
        FileInfo fi = new FileInfo(strfile);
        dt.Rows.Add(fi.Name, fi.Length.ToString(), 
            GetFileTypeByExtension(fi.Extension));
    }

    GridView1.DataSource = dt;
    GridView1.DataBind();
}

private string GetFileTypeByExtension(string fileExtension)
{
    switch (fileExtension.ToLower())
    {
        case ".docx":
        case ".doc":
            return "Microsoft Word Document";
        case ".xlsx":
        case ".xls":
            return "Microsoft Excel Document";
        case ".txt":
            return "Text Document";
        case ".jpg":
        case ".png":
            return "Image";
        default:
            return "Unknown";
    }
}

protected void GridView1_RowCommand(object sender, 
    GridViewCommandEventArgs e)
{
    Response.Clear();
    Response.ContentType = "application/octet-stream";
    Response.AppendHeader("Content-Disposition", "filename=" 
        + e.CommandArgument);
    Response.TransmitFile(Server.MapPath("~/Data/") 
        + e.CommandArgument);
    Response.End();
}

Please make sure to include the following using declarations in the code behind file.
using System.IO;
using System.Data; 