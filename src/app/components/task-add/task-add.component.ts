import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  task: Task = { title: '', description: '', status: 'Incomplete' };

  constructor(private router: Router, private taskService: TaskService) { }

  addTask(): void {
    if (this.task.title.trim() && this.task.description.trim()) {
      this.taskService.addTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}