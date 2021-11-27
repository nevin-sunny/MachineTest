import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepting here..");
    let token= sessionStorage.getItem('token');
    if(sessionStorage.getItem('userName')&& sessionStorage.getItem('token')){
      request=request.clone(
        {
          setHeaders:{
            Authorization: `Bearer ${token}`
          }
        }
      )
    }
    return next.handle(request);
  }
}
