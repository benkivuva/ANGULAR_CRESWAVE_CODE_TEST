// task-table.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  editTask(task: Task): void {
    // Navigate to the task form for editing
    this.router.navigate(['/tasks', task.id]);
  }

  deleteTask(task: Task): void {
    if (task.id) {
      if (confirm('Are you sure you want to delete this task?')) {
        this.taskService.deleteTask(task.id).subscribe(() => {
          // Remove the task from the list
          this.tasks = this.tasks.filter(t => t.id !== task.id);
        });
      }
    } else {
      console.error('Task id is undefined.');
    }
  }
}