using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AngularTrainingCenterApi.Models
{
    public class ForgotPasswordModel
    {
        [Required]
        public string Email { get; set; }
    }
}