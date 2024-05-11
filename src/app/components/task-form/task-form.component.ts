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
    if (!this.task) {
      this.task = { title: '', description: '', status: 'Incomplete' };
    }
  }

  onSubmit(): void {
    if (this.task && this.task.title.trim() && this.task.description.trim()) {
      this.taskService.addTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }

  updateTitle(newTitle: string): void {
    if (this.task) {
      this.task.title = newTitle;
    }
  }

  updateDescription(newDescription: string): void {
    if (this.task) {
      this.task.description = newDescription;
    }
  }

  updateStatus(newStatus: boolean): void {
    if (this.task) {
      this.task.status = newStatus ? 'Complete' : 'Incomplete';
    }
  }
}