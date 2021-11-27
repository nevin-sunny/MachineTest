import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeRegistration } from 'src/app/shared/employee-registration';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  page: number = 1;
  filter: string;
  constructor(public employeeService: EmployeeService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.bindEmployee();
  }
  //populate form by clicking the column
  populateForm(emp: EmployeeRegistration) {
    console.log(emp);

    this.employeeService.formData = Object.assign({}, emp);
  }

  //delete
  deleteEmployee(id: number) {
    console.log("deleting employee...")
    if (confirm('Are you sure to delete this record?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        (result) => {
          console.log(result);
          this.employeeService.bindEmployee();

          this.toastrService.success("Inserted employee..","TravelRequestForm")
          //this.toxterService.success('Insert!', 'success!');
          //this.empService.bindEmployee();
        },
        (error) => {
          console.log(error);
        });

    }
  }
  //update an employee
  updateEmployee(empId: number) {
    console.log(empId);
    this.router.navigate(['employee', empId]);
  }

}
