import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  listtask: Task[]=[];
   showAdd: boolean=false;
  constructor(
    private taskSer:ToDoListService
  ) { }

  ngOnInit(): void {

    this.taskSer.getAllTask().subscribe({
      next:(response)=>{
        console.log(response);
        for (const key in response) {
          response[key].id=key;
          this.listtask.push(response[key])
          console.log(this.listtask);
        } 
        
      }
    })  
  }
  changeStatut(t){
    t.statut=!t.statut
   this.taskSer.donetask(t).subscribe({
      next:(response)=>{
      console.log(response);},
      error:(err)=>{
        console.log("Probleme avec done task et changeStatut",err);
      }
      
    });
   
    // else(this.taskSer.undonetask(t).subscribe({
    //   next:(response)=>{
    //     console.log(response);},
    //     error:(err)=>{
    //       console.log("Probleme avec undone task et changeStatut",err);
    //     }
    // }))
  }
  show(){
    this.showAdd=true;
    return this.showAdd
  }

}
