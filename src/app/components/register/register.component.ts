import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';
import { User } from  '../../models/user.model';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {
  public user:User;
  public message;
  public userSaved:string;


  constructor(private userService:RestUserService) {
    this.user = new User('', '', '', '', '', '', '','ROLE_USER');
  }

  ngOnInit(): void {
  }

  onSubmit(register){
    console.log(this.user);
    this.userService.saveUser(this.user).subscribe((res:any)=>{
      this.message = res.message;
      if(res.userSaved){
        this.userSaved = res.userSaved.username;
        register.reset();
        //console.log(this.user)
      }else{
        console.log(this.message);
      }
    },
    error=> console.log(<any>error)
    )
  }

}
