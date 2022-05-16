import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from '../login-serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private logServ:LoginServService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
AddUser(identifiants){
  this.logServ.Addnewuser(identifiants).subscribe({
    next:(response)=>{
      console.log(response);
      console.log(identifiants);
        this.router.navigateByUrl('')     
      },
    error:(error)=>{
     
     console.log('Probleme avec addUser');
      }

  });

}
}
