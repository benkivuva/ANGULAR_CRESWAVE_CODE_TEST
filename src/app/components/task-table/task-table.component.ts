import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';
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

    dialogRef.afterClosed().subscribe(() => {
      this.loadTasks();
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

  toggleTaskStatus(task: Task): void {
    if (task.status === 'Incomplete') {
      task.status = 'In Progress';
    } else if (task.status === 'In Progress') {
      task.status = 'Complete';
    } else if (task.status === 'Complete') {
      task.status = 'Incomplete';
    }

    this.taskService.updateTask(task).subscribe(updatedTask => {
      // Update task in the list
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    });
  }
}