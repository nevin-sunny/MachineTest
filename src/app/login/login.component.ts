import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {Jwtresponse} from '../shared/jwtresponse';
import {User} from '../shared/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm: FormGroup;
  isSubmitted=false;
  loginUser: User=new User();
  error='';
  jwtResponse:any=new Jwtresponse();
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    //FormGroup
    this.loginForm=this.formBuilder.group(
      {
        UserName: ['',[Validators.required, Validators.minLength(2)]],
        UserPassword: ['',[Validators.required]]
      }
    );
  }
//Get controls 
get formControls(){
  return this.loginForm.controls;
}

//login verify credentials
loginCredentials(){
  this.isSubmitted=true;
  console.log(this.loginForm.value);

  //invalid
  if(this.loginForm.invalid)
  return; 

  //valid
  if(this.loginForm.valid){

    this.authService.loginVerify(this.loginForm.value).subscribe(
      data=>{
        console.log(data);

        //token
       this.jwtResponse=data;
      // this.jwtResponse.RoleId=data.ro
       console.log("jwt:"+this.jwtResponse.RoleId);
    
        sessionStorage.setItem("token",this.jwtResponse.token);
        console.log(this.jwtResponse.RoleId);

        if(this.jwtResponse.RoleId===1){
          //logged as Admin
          console.log("Admin");
          localStorage.setItem("Username",this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE",this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("Username",this.jwtResponse.UserName);
          
          this.router.navigateByUrl('/admin');

        }else if(this.jwtResponse.RoleId===2){
          console.log("HR Manager");
          localStorage.setItem("Username",this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE",this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("Username",this.jwtResponse.UserName);
          this.router.navigateByUrl('/hrmanager');

        }else if(this.jwtResponse.RoleId===3){
          console.log("User");
          localStorage.setItem("Username",this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE",this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("Username",this.jwtResponse.UserName);
          this.router.navigateByUrl('/home');

        }
        else{
          this.error="Sorry..Invalid authorization"
        }
      },
      error=>{
        this.error="Invalid user name or password. Try again"
      }
      
    );
  }
}




//calling method from AuthService -Authorization
//check the role--based on TRoleID it redirect to respective component

loginVerifyTest(){
  if(this.loginForm.valid){
    this.authService.getUserByPassword(this.loginForm.value)
    .subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
}
