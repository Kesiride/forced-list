import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private taskUrl = '/api/tasks';

    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    constructor(private http: HttpClient) {}

    addTask(task: Task): Observable<Task> {
        task.id = null;
        return this.http.post<Task>(this.taskUrl, task, this.httpOptions).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    removeTask(id: number): Observable<Task> {
        const url = `${this.taskUrl}/${id}`;
        return this.http.delete<Task>(url, this.httpOptions).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getTask(): Observable<Task[]> {
        return this.http.get<Task[]>(this.taskUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = err.error.message;
        } else {
            errorMessage = err.status + ' ' + err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
