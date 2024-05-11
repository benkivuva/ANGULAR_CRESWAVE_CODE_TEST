import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;
  editing: boolean = false;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void {
    const taskId = 1; // Set the task ID to 1
    this.taskService.getTaskDetails(taskId).pipe(
      catchError(error => {
        console.error('Error loading task:', error);
        // Handle error as needed, e.g., display an error message
        return throwError(error);
      })
    ).subscribe(task => {
      this.task = task;
    });
  }

  toggleStatus(): void {
    // Toggle task status
  }

  openEditDialog(): void {
    if (this.task && this.task.id) {
      const dialogRef = this.dialog.open(TaskEditDialogComponent, {
        width: '400px',
        data: { taskId: this.task.id } // Pass the task ID to the dialog component
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Update task with edited data
          this.task = result;
        }
      });
    }
  }
}