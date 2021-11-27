import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

    //get an user
  getUserByPassword(user: User): Observable<any> {
    console.log(user.UserName);
    console.log(user.UserPassword);
    return this.httpClient.get
      (environment.apiUrl + "api/login/getuser/"+user.UserName+"/" + user.UserPassword);
  }
  //Authorize return token
  public loginVerify(user: User){
    //calling webservie url and passing username and password
    console.log("Attempt authenticate and authrize ::");
    console.log(user);
    return this.httpClient.get(environment.apiUrl+"api/login/"+user.UserName+'/'+user.UserPassword);
  }
  //logout
  public logout(){
    localStorage.clear();
    sessionStorage.removeItem('token');
  }
}
