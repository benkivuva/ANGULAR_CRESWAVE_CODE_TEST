import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'actions'];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  openEditDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the task if changes were made
        const index = this.tasks.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.tasks[index] = result;
        }
      }
    });
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