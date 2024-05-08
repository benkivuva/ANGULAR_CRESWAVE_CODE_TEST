// task-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    if (this.task) {
      // populate
    }
  }

  onSubmit(): void {
    if (this.task) {
      // If a task is provided, update it
      this.taskService.updateTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    } else {
      console.error('Task is null. Cannot submit.');
    }
  }
}