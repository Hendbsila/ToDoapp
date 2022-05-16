import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServService } from '../login-serv.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
test=false;
  constructor(
    private http:HttpClient,
    private logServ:LoginServService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  toLogin(identifiants){
    this.logServ.seConnecter(identifiants).subscribe({
      next:(response)=>{
        console.log(response);
        console.log(identifiants);
        let usersList = [];
        for (const key in response) {
          console.log(response[key]);
          usersList.push(response[key]);
          }
          usersList.forEach(elt => {
          if((elt.email==identifiants.email) && (elt.passeword==identifiants.passeword))
          {this.test=true;
          localStorage.setItem('authentification', response['connected']);
          this.router.navigateByUrl('')
         }
        });
        if (this.test==false){
          alert('Please check your email and passeword');
          

        }

        
      
         

        },
      error:(error)=>{
       
       console.log('Probleme authentification');
        }
  
    });
  }

}
