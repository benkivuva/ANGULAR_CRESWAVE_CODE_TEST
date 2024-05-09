import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent {
  task: Task;

  constructor(
    public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = { ...data.task };
    console.log(this.task);
  }

  saveChanges(): void {
    // Save changes to the task
    this.dialogRef.close(this.task);
  }

  cancelEdit(): void {
    this.dialogRef.close();
  }
}