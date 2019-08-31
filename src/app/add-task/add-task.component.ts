import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task-list/task-list.service';
import { Task } from '../task-list/task';
import { TaskListComponent } from '../task-list/task-list.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
    // tslint:disable-next-line: no-inferrable-types
    @Output() createTask: EventEmitter<Task>;
    cardTitle: string = 'Nephew\'s Add Task';
    tasks: Observable<Task[]>;
    task: Task = {id: null, name: ''};
    errorMessage: string;

    constructor() {
        this.createTask = new EventEmitter<Task>();
    }

    addTask(taskName: string) {
        this.task.name = taskName;
        this.createTask.emit(this.task);
    }
}
