import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './registers/registers.component';
import { EmployeeListComponent } from './registers/employee-list/employee-list.component';
import { EmployeeComponent } from './registers/employee/employee.component';
import{EmployeeService} from './shared/employee.service'
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor} from './shared/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HrmanagerComponent } from './hrmanager/hrmanager.component';
import { TravelrequestComponent } from './travelrequest/travelrequest.component';
import { RequestComponent } from './travelrequest/request/request.component';
import { RequestlistComponent } from './travelrequest/requestlist/requestlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistersComponent,
    EmployeeListComponent,
    EmployeeComponent,
    HomeComponent,
    AdminComponent,
    HrmanagerComponent,
    TravelrequestComponent,
    RequestComponent,
    RequestlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule
   
  ],
  providers: [
    EmployeeService, AuthService, AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
