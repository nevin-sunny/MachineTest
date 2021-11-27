import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-hrmanager',
  templateUrl: './hrmanager.component.html',
  styleUrls: ['./hrmanager.component.css']
})
export class HrmanagerComponent implements OnInit {
  loggedUserName: string;
  constructor(private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
