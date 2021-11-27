import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { EmployeeListComponent } from './registers/employee-list/employee-list.component';
import { RegistersComponent } from './registers/registers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './registers/employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { HrmanagerComponent } from './hrmanager/hrmanager.component';

const routes: Routes = [
  {path: '',  redirectTo:"/login", pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'registers',  component:RegistersComponent},
  {path: 'employee',  component: EmployeeComponent},
  {path: 'employeelist',  component: EmployeeListComponent},
  {path: 'employee/:empId',  component: EmployeeComponent},
  {path:'home', component: HomeComponent},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'hrmanager', component: HrmanagerComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'admin/employee',component:EmployeeComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'admin/employeelist',component:EmployeeListComponent,canActivate:[AuthGuard],data:{role:'1'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
