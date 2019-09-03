import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    taskList: Task[];

    constructor() {
        console.log('TASK SERVICE');
        this.taskList = [];
    }

    addTask(task: Task) {
        console.log('ADD TASK TASK ', task, this.taskList);
        task.id = this.taskList.length + 1;
        this.taskList.push(task);
    }

    removeTask(task: Task) {
        // remove task from task list collection
        this.taskList.splice(this.taskList.indexOf(task), 1);
    }

    getTask(): Observable<Task[]> {
        return of(this.taskList);
    }
}
