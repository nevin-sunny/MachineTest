using FinalMachineTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
 public interface IRegister
  {
    Task<List<EmployeeRegistration>> GetRegisteredUsers();

    Task<EmployeeRegistration> AddEmployee(EmployeeRegistration employee);

    Task<EmployeeRegistration> DeleteEmployee(int id);

    Task<EmployeeRegistration> UpdateEmployee(EmployeeRegistration employee);

    Task<EmployeeRegistration> GetEmployeeById(int id);
  }
}
