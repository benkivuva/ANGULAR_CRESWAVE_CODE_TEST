import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskDetails(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    console.log('Fetching task details from:', url);
    return this.http.get<Task>(url).pipe(
      tap(task => console.log('Task details received:', task)),
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
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}