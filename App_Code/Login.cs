using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
namespace Angular.UI
{
    public class Login 
    {

　
        public LoginData GetUserData( )
        {
            return new LoginData() { Password = "Es1234", UserName = "ester_pi" };
        }
    }
    public class LoginData
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
