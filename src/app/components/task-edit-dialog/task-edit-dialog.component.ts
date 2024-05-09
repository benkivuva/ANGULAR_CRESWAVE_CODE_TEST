import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent {
  task: Task;
  @Output() taskSaved = new EventEmitter<Task>();

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
    // Emit event to notify that task is saved
    this.taskSaved.emit(this.task);
  }

  cancelEdit(): void {
    this.dialogRef.close();
  }

  toggleStatus(status: string): void {
    this.task.status = status;
  }
}