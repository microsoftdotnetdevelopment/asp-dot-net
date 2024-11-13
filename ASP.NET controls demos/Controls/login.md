<asp:LoginView ID="LoginView1" runat="server">
            <LoggedInTemplate>
                    <li>
                        <a>Welcome, 
                            <asp:LoginName ID="LoginName1" runat="server" /> ,
                            <asp:LoginStatus ID="LoginStatus1" runat="server" />

                        </a>
                    </li>
                </LoggedInTemplate>
                <AnonymousTemplate>
                    <li><a href="LoginUser.aspx">Login</a></li>
                </AnonymousTemplate>
            </asp:LoginView>