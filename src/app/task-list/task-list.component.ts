import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { TaskService } from './task-list.service';
import { Task } from './task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnChanges {
    // tslint:disable-next-line: no-inferrable-types
    faTimes = faTimes;
    cardTitle: string = 'Nephew\'s Task List';
    @Input()
    tasks: Task[] = [];
    errorMessage: string;

    constructor(private taskService: TaskService) {}

    getTasks() {
        this.taskService.getTask().subscribe({
            next: data => this.tasks = data,
            error: err => this.errorMessage = err
        });
    }

    ngOnInit(): void {
        this.getTasks();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tasks) {
            this.getTasks();
        }
    }

    removeTask(id: number) {
        this.taskService.removeTask(id).subscribe(data => {
            this.getTasks();
          });
    }
}
