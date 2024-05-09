import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'api/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching tasks:', error);
        throw error;
      })
    );
  }

  getTaskDetails(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      catchError(error => {
        console.error('Error fetching task details:', error);
        throw error;
      })
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    console.log('Updating task with ID:', task.id);
    console.log('New task data:', task);
    return this.http.put<Task>(url, task).pipe(
      catchError(error => {
        console.error('Error updating task:', error);
        throw error;
      })
    );
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}