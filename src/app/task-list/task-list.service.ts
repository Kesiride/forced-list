import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private taskUrl = '/api/tasks';
    taskList: Task[];

    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) {
        console.log('TASK SERVICE');
        this.taskList = [];
    }

    addTask(task: Task) {
        //task.id = null;
        // return this.http.post<Task>(this.taskUrl, task, this.httpOptions).pipe(
        //     tap(data => console.log('All: ' + JSON.stringify(data))),
        //     catchError(this.handleError)
        // );
        console.log('ADD TASK TASK ', task, this.taskList);
        task.id = this.taskList.length + 1;
        this.taskList.push(task);
    }

    removeTask(task: Task) {
        // remove task from task list collection
        this.taskList.splice(this.taskList.indexOf(task), 1);
    }

    getTask(): Observable<Task[]> {
        // return this.http.get<Task[]>(this.taskUrl).pipe(
        //     tap(data => console.log('All: ' + JSON.stringify(data))),
        //     catchError(this.handleError)
        // );
        return of(this.taskList);
    }

    // private handleError(err: HttpErrorResponse) {
    //     let errorMessage = '';
    //     if (err.error instanceof ErrorEvent) {
    //         errorMessage = err.error.message;
    //     } else {
    //         errorMessage = err.status + ' ' + err.message;
    //     }
    //     console.error(errorMessage);
    //     return throwError(errorMessage);
    // }
}
