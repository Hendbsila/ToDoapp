import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  link = 'https://todoapp-c9edb-default-rtdb.firebaseio.com/tasks.json';
  constructor(
    private http: HttpClient
  ) { }
  //private task:Task;
  private tasklist = [
    //new Task(1,true,'go to scool',new Date),
    //new Task(2,false,'take a nap',new Date),
    //new Task(3,true,'feed the cat',new Date),

  ]
  private gotKey

  getAllTask() {
    return this.http.get(this.link)

  }
  addNewTask(newT) {
    newT.statut = false;
    newT.date = new Date;
    console.log(newT);
    return this.http.post(this.link, newT);
  }
 
  gettask(date) {
    return this.tasklist.find((c) => c.date == date);
  }
  donetask(t) {
    let o=new Object();
    o[t['id']]={
      "title":t.title,
      "date":t.date,
      "statut":t.statut 
    }
    return this.http.patch(this.link,o)
  }
  
}
