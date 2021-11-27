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
  public class RequestController : ControllerBase
  {
    IRequestRepo requestRepository;
    public RequestController(IRequestRepo _r)
    {
      requestRepository = _r;
    }
    #region Request details 
    [HttpGet]
    [Route("GetAllRequests")]
    public async Task<IActionResult> GetAllRequests()
    {
      try
      {
        var req = await requestRepository.GetRequests();
        if (req == null)
        {
          return NotFound();
        }
        return Ok(req);
      }
      catch (Exception)
      {
        return BadRequest();
      }

    }
    #endregion

    #region Resource details by id
    [HttpGet]
    [Route("GetResourceById")]
    public async Task<IActionResult> GetResourceById(int id)
    {
      try
      {
        var req = await requestRepository.GetRequestById(id);
        if (req == null)
        {
          return NotFound();
        }
        return Ok(req);
      }
      catch (Exception)
      {
        return BadRequest();
      }

    }
    #endregion
  
    #region Add request

    [HttpPost]
    [Route("AddRequest")]
    public async Task<IActionResult> AddRequest(RequestTable request)
    {
      //check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          var requestId = await requestRepository.AddRequest(request);
          if (requestId != null)
          {
            return Ok(requestId);
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

   

    #region Update Request
    [HttpPut]
    // [Authorize]
    [Route("UpdateRequest")]
    public async Task<IActionResult> UpdateRequest(RequestTable request)
    {
      //Check the validation of body
      if (ModelState.IsValid)
      {
        try
        {
          await requestRepository.UpdateRequest(request);
          return Ok(request);
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }
    #endregion

    #region Delete request
    [HttpDelete]
    [Route("DeleteRequest")]
    public async Task<IActionResult> DeleteRequest(int id)
    {
      try
      {
        var req = await requestRepository.DeleteRequest(id);
        if (req == null)
        {
          return NotFound();
        }
        return Ok(req);
      }
      catch (Exception)
      {
        return BadRequest();
      }



    }
    #endregion
  }
}
