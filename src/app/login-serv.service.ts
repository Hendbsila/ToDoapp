import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {
  link = 'https://todoapp-c9edb-default-rtdb.firebaseio.com/users.json';
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  seConnecter(identifiant){
     return this.http.get(this.link);
  }
  seDeconnecter() {
    localStorage.removeItem('authentification');
    this.router.navigateByUrl('\login')

  }
  estConnecte() {
    let token = localStorage.getItem('authentification');
    if (token) return true;
    else return false;
  }
  Addnewuser(identifiants){
    return this.http.post(this.link,identifiants)
  }
}
