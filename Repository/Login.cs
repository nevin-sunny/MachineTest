using FinalMachineTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
  public class Login: ILogin
  {
    FinalMachineTestContext _db;
    public Login(FinalMachineTestContext db)
    {
       _db = db;

    }
    public async Task<ActionResult<TblUser>> GetUserByPassword(string un, string pwd)
    {
      if (_db != null)
      {
        TblUser tblUser = await _db.TblUser.FirstOrDefaultAsync(us => us.UserName == un && us.UserPassword == pwd);
        return tblUser;
      }
      return null;
    }

    // get user details by using username and password
    public TblUser validateUser(string username, string password)
    {
      if (_db != null)
      {
        TblUser dbuser = _db.TblUser.FirstOrDefault(em => em.UserName == username && em.UserPassword == password);
        if (dbuser != null)
        {
          return dbuser;
        }
      }
      return null;

    }

  }
}

