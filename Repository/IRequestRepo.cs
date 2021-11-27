using FinalMachineTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
  public interface IRequestRepo
  {
    Task<List<RequestTable>> GetRequests();

    Task<RequestTable> AddRequest(RequestTable request);

    Task<RequestTable> DeleteRequest(int id);

    Task<RequestTable> UpdateRequest(RequestTable request);

    Task<RequestTable> GetRequestById(int id);
  }
}
