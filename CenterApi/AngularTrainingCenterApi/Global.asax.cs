using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace AngularTrainingCenterApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        protected void Application_EndRequest()
        {
            if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS" && Response.StatusCode == 405)
            {
                //string vlsOrigin = Request.Headers["ORIGIN"];
                //Response.AddHeader("Access-Control-Allow-Origin", vlsOrigin);
                //Response.AddHeader("Access-Control-Allow-Methods", "POST");
                //Response.AddHeader("Access-Control-Allow-Headers", "accept, content-type");
                //Response.AddHeader("Access-Control-Max-Age", "1728000");
                Response.StatusCode = 200;
            }
        }
    }
}
