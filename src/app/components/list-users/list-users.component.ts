import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:[];
  search;
  public userSelected:User;
  public user;
  public user2;

  constructor(private restUser: RestUserService) { }

  ngOnInit(): void {
    this.userSelected = new User('','','','','','','','')
    this.user = this.restUser.getUser();
    this.listUsers();
      
  
  }

  listUsers(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res.users){
        this.users= res.users;
        console.log(this.users)
      }else{
        alert(res.message)
      }
    }, error=> alert(error.error.message));
  }

  getUser4(userT){
    this.userSelected = userT;
   console.log(this.userSelected)
  }

  deleteUserAdmin(){
    console.log(this.user._id, this.userSelected);
    this.restUser.deteleUserByAdmin(this.user._id, this.userSelected).subscribe((res:any)=>{
      if(res.userRemoved){
        alert(res.message);
  
        this.user = this.restUser.getUser()
        
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }


  updateuserByAdmin(){
    delete this.userSelected.password;
    delete this.userSelected.role;
    console.log(this.user._id, this.userSelected);
    this.restUser.updateUserByAdmin(this.user._id, this.userSelected).subscribe((res:any)=>{
      if(res.userUpdated){
        alert(res.message);
      }else{
        alert(res.message);
        this.user = this.restUser.getUser();
      
      }
    },
    error=> alert(error.error.message))
  }

}
