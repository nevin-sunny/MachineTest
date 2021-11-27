using FinalMachineTest.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
  public interface ILogin
  {
    Task<ActionResult<TblUser>> GetUserByPassword(string un, string pwd);
    // get user details by using username and password
    public TblUser validateUser(string username, string password);
  }
}
