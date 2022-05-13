import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(
    private taskSer:ToDoListService
  ) { }
  
  ngOnInit(): void {
  }
addTask(newT){
this.taskSer.addNewTask(newT).subscribe({
  next:(response)=>{
    console.log(response); 
    window.location.reload();
  },
  error:(err)=>{
    console.log('Probleme avec addtask', err);
  }
});
}
}
