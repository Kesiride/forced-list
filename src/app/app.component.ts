import { Component } from '@angular/core';
import { TaskService } from './task-list/task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Forced List';

  constructor(private taskService: TaskService) {}

  addTask(task: any) {
    console.log('KESIRIDE', task);
    this.taskService.addTask(task);
  }
}
