using FinalMachineTest.Models;
using FinalMachineTest.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RegisterController : ControllerBase
  {
    IRegister registerRepository;
    public RegisterController(IRegister _r)
    {
      registerRepository = _r;
    }
    #region Registered user details 
    [HttpGet]
    [Route("GetAllEmployees")]
    public async Task<IActionResult> GetRegisteredUsers()
    {
      try
      {
        var emp = await registerRepository.GetRegisteredUsers();
        if (emp == null)
        {
          return NotFound();
        }
        return Ok(emp);
      }
      catch (Exception)
      {
        return BadRequest();
      }

    }
    #endregion

    #region employee details by id
    [HttpGet]
    [Route("GetEmployeeById")]
    public async Task<IActionResult> GetEmployeeById(int id)
    {
      try
      {
        var emp = await registerRepository.GetEmployeeById(id);
        if (emp == null)
        {
          return NotFound();
        }
        return Ok(emp);
      }
      catch (Exception)
      {
        return BadRequest();
      }

    }
    #endregion

    #region Add employee

    [HttpPost]
    [Route("AddEmployee")]
    public async Task<IActionResult> AddEmployee(EmployeeRegistration employee)
    {
      //check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          var empId = await registerRepository.AddEmployee(employee);
          if (empId != null)
          {
            return Ok(empId);
          }
          else
          {
            return NotFound();
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }

    #endregion



    #region Update Employee
    [HttpPut]
    // [Authorize]
    [Route("UpdateEmployee")]
    public async Task<IActionResult> UpdateEmployee(EmployeeRegistration employee)
    {
      //Check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          await registerRepository.UpdateEmployee(employee);
          return Ok(employee);
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }
    #endregion

    #region Delete employee
    [HttpDelete]
    [Route("DeleteEmployee")]
    public async Task<IActionResult> DeleteEmployee(int id)
    {
      try
      {
        var emp = await registerRepository.DeleteEmployee(id);
        if (emp == null)
        {
          return NotFound();
        }
        return Ok(emp);
      }
      catch (Exception)
      {
        return BadRequest();
      }



    }
    #endregion
  }
}
