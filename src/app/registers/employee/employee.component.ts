import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRegistration } from 'src/app/shared/employee-registration';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empId: number;
  employee: EmployeeRegistration = new EmployeeRegistration();
  constructor(public empService: EmployeeService, private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     // this.resetform();
     //get empid from activatedroute
     this.empId = this.route.snapshot.params['empId'];
     if (this.empId != 0 || this.empId != null) {
       //get employee
       this.empService.getEmployeeById(this.empId).subscribe(
         (data) => {
           console.log(data);
           this.empService.formData = Object.assign({}, data);
 
         },
         error =>
           console.log(error)
       );
     }
 
   }
   onSubmit(form: NgForm) {
 
     console.log(form.value);
 
     let addId = this.empService.formData.EmpId;
     //insert
 
     if (addId == 0 || addId == null) {
       this.insertEmployeeRecord(form);
       //alert("inserted");
 
 
     }
     //update
     else {
 
       console.log("update");
       this.updateEmployeeRecord(form);
 
 
     }
     //alert("submitted");
     //form.resetForm();
   }
 
   //clear all content at initialisation
 
   resetform(form?: NgForm) {
     if (form != null) {
       form.resetForm();
     }
   }
 
   //insert employee
   insertEmployeeRecord(form?: NgForm) {
     console.log("inserting employee...");
     this.empService.insertEmployee(form.value).subscribe(
       (result) => {
         console.log("result" + result);
         this.resetform(form);
         // this.toastrService.success("Inserted employee..","EmpApp v2021")
         // this.toastrService.success('Insert!', 'succes!');
       }
     );
     window.location.reload();
   }
   //update employee
   updateEmployeeRecord(form?: NgForm) {
     console.log("updating employee...");
     this.empService.updateEmployee(form.value).subscribe(
       (result) => {
         console.log(result);
         this.resetform(form);
         // this.toastrService.success("Inserted employee..","EmpApp v2021")
         //this.toxterService.success('Insert!', 'succes!');
         //this.empService.bindEmployee();
       }
     );
     window.location.reload();
  }

}
