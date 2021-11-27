using FinalMachineTest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalMachineTest.Repository
{
  public class RequestRepo: IRequestRepo
  {
    FinalMachineTestContext db;

    public RequestRepo(FinalMachineTestContext _db)
    {
      db = _db;
    }

    #region get request forms
    public async Task<List<RequestTable>> GetRequests()
    {
      if (db != null)
      {
        return await db.RequestTable.ToListAsync();
      }
      return null;
    }
    #endregion

    #region insert request
    public async Task<RequestTable> AddRequest(RequestTable request)
    {
      {
        //--- member function to add request ---//
        if (db != null)
        {
          await db.RequestTable.AddAsync(request);
          await db.SaveChangesAsync();
          return request;
        }
        return null;

      }


    }
    #endregion

    #region delete request
    public async Task<RequestTable> DeleteRequest(int id)
    {
      if (db != null)
      {
        RequestTable dbreq = db.RequestTable.Find(id);
        db.RequestTable.Remove(dbreq);
        db.SaveChanges();



        return (dbreq);
      }



      return null;

    }
    #endregion

    #region update resource
    public async Task<RequestTable> UpdateRequest(RequestTable request)
    {
      if (db != null)
      {
        db.RequestTable.Update(request);
        await db.SaveChangesAsync();
        return request;
      }
      return null;
    }
    #endregion

    #region get request by id
    public async Task<RequestTable> GetRequestById(int id)
    {

      var request = await db.RequestTable.FirstOrDefaultAsync(em => em.RequestId == id);
      if (request != null)
      {
        return request;
      }

      return null;
    }
    #endregion
  }
}
