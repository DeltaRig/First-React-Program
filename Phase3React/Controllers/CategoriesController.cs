using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Phase3React.Controllers.Models;

namespace Phase3React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ILogger<CategoriesController> _logger;

        public CategoriesController(ILogger<CategoriesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            List<Category> categories = new List<Category>();
            categories.Add(new Category { Name = "React", Code = "react" });
            categories.Add(new Category { Name = "Angular", Code = "angular" });
            categories.Add(new Category { Name = "Redux", Code = "redux" });
            categories.Add(new Category { Name = "ES6", Code = "es6" });
            categories.Add(new Category { Name = "Java", Code = "java" });
            return categories;
        }
    }
}
