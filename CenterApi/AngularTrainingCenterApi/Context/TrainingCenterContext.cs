using AngularTrainingCenterApi.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularTrainingCenterApi.Context
{
    public class TrainingCenterContext : IdentityDbContext<ApplicationUser>
    {
        public TrainingCenterContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static TrainingCenterContext Create()
        {
            return new TrainingCenterContext();
        }
    }
}