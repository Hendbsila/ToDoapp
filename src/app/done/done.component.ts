import { Component, Input, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
@Input() tasklist: Task[]=[];
filtredTab: Task[]=[]
  constructor(
    private taskSer:ToDoListService

  ) { }

  ngOnInit(): void {
    // console.log(this.taskSer.getAllTask());
    // this.filtredTab=this.taskSer.TaskFilter();
    // console.log(this.filtredTab);
    this.TaskFilter();
  }
  
  TaskFilter() {
    console.log(this.tasklist);
    this.taskSer.getAllTask().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          this.tasklist.push(response[key])
          console.log(this.tasklist);
          this.filtredTab=this.tasklist.filter((t) => t.statut == true)
        }
      },
      error: (err) => {
        console.log("probleme avec taskfilter");
      }
    })
    return (this.filtredTab)
  }

}
