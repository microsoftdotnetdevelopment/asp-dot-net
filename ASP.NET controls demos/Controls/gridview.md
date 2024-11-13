<connectionStrings>
    <add name="SqlDbConnection" connectionString="Data Source=SUNNY;Initial catalog=synapse;Integrated security=true" providerName="System.Data.SqlClient"/>
  </connectionStrings>
.........
<form runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1"></asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>" SelectCommand="select * from nttdata">
</asp:SqlDataSource>
</div>
        </form>
-----------------------------------------------------------------------------------------
The GridView control provides many built-in capabilities that allow the user to sort, update, delete, select, and page through items in the control.
1-Each column in the GridView control is represented by a DataControlField object. By default, the AutoGenerateColumns property is set to true, 
You can also manually control which column fields appear in the GridView control by setting the AutoGenerateColumns property to false .
AutoGenerateColumns="false"
2-Sorting allows the user to sort the items in the GridView control with respect to a specific column by clicking on the column's header.
To enable sorting, set the AllowSorting property to true.
AllowSorting="True"
3-Instead of displaying all the records in the data source at the same time, the GridView control can automatically break the records up into pages. 
To enable paging, set the AllowPaging property to true.
AllowPaging="True"

...........
<form runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false"
	AllowSorting="True" DataSourceID="SqlDataSource1" AllowPaging="True">
            <Columns>
		<asp:BoundField ReadOnly="True" HeaderText="pname"
		DataField="pname" SortExpression="pname"></asp:BoundField>
		<asp:BoundField HeaderText="pcompany" DataField="pcompany"
		SortExpression="pcompany"></asp:BoundField>
		<asp:BoundField HeaderText="pquantity" DataField="pquantity"
		SortExpression="pquantity"></asp:BoundField>
		<asp:BoundField HeaderText="pcost" DataField="pcost"
		SortExpression="pcost"></asp:BoundField>	
	</Columns>
	</asp:GridView>       
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>" SelectCommand="select * from nttdata"></asp:SqlDataSource>
</div></form>

----------------------------------------------------------------------------------------------------
Update Gridview-
 <form runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false"
	AllowSorting="True" DataSourceID="SqlDataSource1" AllowPaging="True" AutoGenerateEditButton="true" DataKeyNames="pid">
            <Columns>
                <asp:BoundField HeaderText="pid" DataField="pid"
		SortExpression="pid"></asp:BoundField>
		<asp:BoundField ReadOnly="True" HeaderText="pname"
		DataField="pname" SortExpression="pname"></asp:BoundField>
		<asp:BoundField HeaderText="pcompany" DataField="pcompany"
		SortExpression="pcompany"></asp:BoundField>
		<asp:BoundField HeaderText="pquantity" DataField="pquantity"
		SortExpression="pquantity"></asp:BoundField>
		<asp:BoundField HeaderText="pcost" DataField="pcost"
		SortExpression="pcost"></asp:BoundField>	
	</Columns>
	</asp:GridView>       
       <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>" 
SelectCommand="select * from nttdata" UpdateCommand="UPDATE [nttdata] SET [pname] = @pname , [pcompany] =  @pcompany , [pquantity] = @pquantity , [pcost]=@pcost 
	WHERE [pid] = @pid">
            <UpdateParameters>
	<asp:Parameter Type="String" Name="pname"></asp:Parameter>
	<asp:Parameter Type="String" Name="pcompany"></asp:Parameter>
	<asp:Parameter Type="Int32" Name="pquantity"></asp:Parameter>
	<asp:Parameter Type="Int32" Name="pcost"></asp:Parameter>

	</UpdateParameters>
        </asp:SqlDataSource>
</div>
        </form> 
-----------------------------------------------------------------------------------------------------------------------------------
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript">
		function isDelete()
		{
			return confirm("Do you want to delete this row ?");
		}
	</script>
    </head>
<body>
    <form runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false"
	AllowSorting="True" DataSourceID="SqlDataSource1" AllowPaging="True" AutoGenerateEditButton="true" DataKeyNames="pid">
            <Columns>
                	<asp:BoundField HeaderText="pid" DataField="pid"
		SortExpression="pid"></asp:BoundField>
		<asp:BoundField ReadOnly="True" HeaderText="pname"
		DataField="pname" SortExpression="pname"></asp:BoundField>
		<asp:BoundField HeaderText="pcompany" DataField="pcompany"
		SortExpression="pcompany"></asp:BoundField>
		<asp:BoundField HeaderText="pquantity" DataField="pquantity"
		SortExpression="pquantity"></asp:BoundField>
		<asp:BoundField HeaderText="pcost" DataField="pcost"
		SortExpression="pcost"></asp:BoundField>
	<asp:TemplateField>
			<ItemTemplate>
			<asp:LinkButton ID="DeleteBtn" runat="server" CommandName="Delete"
					OnClientClick="return isDelete();">Delete
					</asp:LinkButton>
				</ItemTemplate>
			</asp:TemplateField>
	</Columns>
	</asp:GridView>


       
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SqlDbConnection%>" SelectCommand="select * from nttdata" 
DeleteCommand="DELETE From [nttdata] WHERE [pid] = @pid">
           <DeleteParameters>
		<asp:Parameter Name="pid" Type="Int32" />
	</DeleteParameters>
        </asp:SqlDataSource>
</div>
        </form>
</body>
</html>
