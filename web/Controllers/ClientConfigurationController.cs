using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ESN.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ESN.Web.Controllers
{
    public class ClientConfigurationController : Controller
    {
        ClientConfiguration clientConfig;
        public ClientConfigurationController(IOptions<ClientConfiguration> clientConfigOptions)
        {
            clientConfig = clientConfigOptions?.Value;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return Json(clientConfig);
        }
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
