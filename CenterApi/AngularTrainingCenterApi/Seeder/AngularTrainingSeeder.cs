using AngularTrainingCenterApi.Context;
using AngularTrainingCenterApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularTrainingCenterApi.Seeder
{
    public class AngularTrainingSeeder : CreateDatabaseIfNotExists<TrainingCenterContext>
    {
        protected override void Seed(TrainingCenterContext context)
        {

            if (!context.Roles.Any(r => r.Name == "owner"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "owner" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "trainer"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "trainer" };

                manager.Create(role);
            }

            if (!context.Users.Any(u => u.UserName == "fed.andrey@nixsolutions.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser { UserName = "fed.andrey@nixsolutions.com" };

                manager.Create(user, "Azya1111");
                manager.AddToRole(user.Id, "owner");
            }
        }
    }
}