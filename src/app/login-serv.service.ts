import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {
  link = 'https://todoapp-c9edb-default-rtdb.firebaseio.com/users.json';
  constructor(
    private http:HttpClient
  ) { }
  seConnecter(identifiant){
     return this.http.get(this.link);
  }
}
