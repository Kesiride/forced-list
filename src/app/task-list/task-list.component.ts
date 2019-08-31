import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { TaskService } from './task-list.service';
import { Task } from './task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    faTimes = faTimes;
    cardTitle: string = 'Nephew\'s Task List';
    tasks: Observable<Task[]>;
    errorMessage: string;
    task: Task = {id: null, name: ''};

    constructor(private taskService: TaskService) {}

    getTasks() {
        this.tasks = this.taskService.getTask();
    }

    ngOnInit(): void {
        this.getTasks();
    }

    removeTask(id, name) {
        this.task.id = id;
        this.task.name = name;
        this.taskService.removeTask(this.task);
    }
}
