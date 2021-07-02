import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { fadeIn } from 'src/app/animations/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  token:string = null;
  user:string;
  uri;
  constructor(private router: Router, private restUser:RestUserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
    this.uri = CONNECTION.URI;
  }

   ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

}
