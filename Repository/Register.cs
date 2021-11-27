using FinalMachineTest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
  public class Register: IRegister
  {
    FinalMachineTestContext db;

    public Register(FinalMachineTestContext _db)
    {
      db = _db;
    }

    #region get registered users
    public async Task<List<EmployeeRegistration>> GetRegisteredUsers()
    {
      if (db != null)
      {
        return await db.EmployeeRegistration.ToListAsync();
      }
      return null;
    }
    #endregion

    #region insert employee
    public async Task<EmployeeRegistration> AddEmployee(EmployeeRegistration employee)
    {
      {
        //--- member function to add employee ---//
        if (db != null)
        {
          await db.EmployeeRegistration.AddAsync(employee);
          await db.SaveChangesAsync();
          return employee;
        }
        return null;

      }


    }
    #endregion

    #region delete employee
    public async Task<EmployeeRegistration> DeleteEmployee(int id)
    {
      if (db != null)
      {
        EmployeeRegistration dbemp = db.EmployeeRegistration.Find(id);
        db.EmployeeRegistration.Remove(dbemp);
        db.SaveChanges();



        return (dbemp);
      }



      return null;

    }
    #endregion

    #region update employee details
    public async Task<EmployeeRegistration> UpdateEmployee(EmployeeRegistration employee)
    {
      if (db != null)
      {
        db.EmployeeRegistration.Update(employee);
        await db.SaveChangesAsync();
        return employee;
      }
      return null;
    }
    #endregion

    #region get employee by id
    public async Task<EmployeeRegistration> GetEmployeeById(int id)
    {

      var employee = await db.EmployeeRegistration.FirstOrDefaultAsync(em => em.EmpId == id);
      if (employee != null)
      {
        return employee;
      }

      return null;
    }
    #endregion
  }
}
