import { Injectable } from '@angular/core';
import { EmployeeRegistration } from './employee-registration';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   //create an instance of employee
   formData:EmployeeRegistration=new EmployeeRegistration();
   employees:EmployeeRegistration[];
  constructor(private httpClient:HttpClient) { }

  bindEmployee(){
    this.httpClient.get(environment.apiUrl+"api/emp/getallemployees")
    .toPromise().then(response=>
      this.employees=response as EmployeeRegistration[])
  
  }
  //insert employee
insertEmployee(employee:EmployeeRegistration):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/emp/addemployee",employee);

}
//update employee
updateEmployee(employee:EmployeeRegistration):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/emp/updateemployee",employee);

}


//delete employee
deleteEmployee(employeeId:number):Observable<any>
{
  return this.httpClient.delete(environment.apiUrl+"api/emp/DeleteEmployee?id="+employeeId);

}


//get employee by id
getEmployeeById(employeeId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/emp/getemployeebyid?id="+employeeId);

}

}
