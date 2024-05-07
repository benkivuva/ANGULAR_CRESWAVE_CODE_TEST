// task-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task = { title: '', description: '', status: 'Incomplete' };

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.task.title.trim() && this.task.description.trim()) {
      this.taskService.addTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}