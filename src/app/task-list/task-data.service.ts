import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';

export class TaskDataService {
    createDb() {
        const tasks: Task[] = [
            { id: 1, name: 'Be At Work By 9am' },
            { id: 2, name: 'Check My Name Change Status' },
            { id: 3, name: 'Check My Mac Id Status' }
        ];
        return {tasks};
    }
}
