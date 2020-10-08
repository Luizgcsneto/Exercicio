using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Admin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "hello word";
        }
    }
}
