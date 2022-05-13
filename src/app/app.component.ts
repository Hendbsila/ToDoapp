import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoapp';
 constructor(
   private http:HttpClient
 ){

 }
  ngOnInit(): void {
    //this.http.post('https://todoapp-c9edb-default-rtdb.firebaseio.com/users.json',{
      //'email':'hend@gmail.com',
      //'passeword':'123456'
    //}).subscribe({
    //  next: (response)=>{
//console.log('user created');

      //},
     // error:(err)=>{
      //  console.log('probleme avec creation user');
        
     // }
   //
 }



}
