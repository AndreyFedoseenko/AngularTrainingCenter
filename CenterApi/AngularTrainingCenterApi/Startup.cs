using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Data.Entity;
using AngularTrainingCenterApi.Seeder;

[assembly: OwinStartup(typeof(AngularTrainingCenterApi.Startup))]

namespace AngularTrainingCenterApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            Database.SetInitializer(new AngularTrainingSeeder());
            ConfigureAuth(app);
        }
    }
}
