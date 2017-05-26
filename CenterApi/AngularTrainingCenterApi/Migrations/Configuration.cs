namespace AngularTrainingCenterApi.Migrations
{
    using AngularTrainingCenterApi.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularTrainingCenterApi.Context.TrainingCenterContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularTrainingCenterApi.Context.TrainingCenterContext context)
        {
                var rolesStore = new RoleStore<IdentityRole>(context);
                var rolesManager = new RoleManager<IdentityRole>(rolesStore);
                var role = new IdentityRole { Name = "owner" };

                rolesManager.Create(role);

                rolesStore = new RoleStore<IdentityRole>(context);
                rolesManager = new RoleManager<IdentityRole>(rolesStore);
                role = new IdentityRole { Name = "trainer" };

                rolesManager.Create(role);

                var userStore = new UserStore<ApplicationUser>(context);
                var userManager = new UserManager<ApplicationUser>(userStore);
                var user = new ApplicationUser { UserName = "fed.andrey@nixsolutions.com" };

                userManager.Create(user, "Azya1111");
                userManager.AddToRole(user.Id, "owner");
        }
    }
}
