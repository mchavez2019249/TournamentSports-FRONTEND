import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from 'src/app/animations/animations';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from '../../services/restUser/rest-user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fadeIn]
})
export class NavbarComponent implements OnInit, DoCheck  {
  token:string = null;
  user:string;
  uri;

  constructor(private router: Router, private restUser:RestUserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
    this.uri = CONNECTION.URI;
  }

   ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  logOut(){
    localStorage.clear();
    this.token = null;
    this.router.navigateByUrl('login');
  }

  eliminarUsername(){
    localStorage.removeItem('username');
  }

}
