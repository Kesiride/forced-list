import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../task-list/task-list.service';
import { Task } from '../task-list/task';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
    // tslint:disable-next-line: no-inferrable-types
    cardTitle: string = 'Nephew\'s Add Task';
    tasks: Task[] = [];
    task: Task = {id: null, name: ''};
    errorMessage: string;

    constructor(private taskService: TaskService) {}

    getTasks() {
        this.taskService.getTask().subscribe({
            next: data => this.tasks = data,
            error: err => this.errorMessage = err
        });
    }

    addTask(taskName: string) {
        this.task = {id: null, name: taskName};

        this.taskService.addTask(this.task).subscribe({
            error: err => this.errorMessage = err
        });
        this.getTasks();
    }
}
