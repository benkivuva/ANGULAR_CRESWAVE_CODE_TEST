import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  private pageSize = 10;

  constructor(private http: HttpClient) { }

  getTasks(page: number): Observable<Task[]> {
    const params = new HttpParams().set('_page', page.toString()).set('_limit', this.pageSize.toString());
    return this.http.get<Task[]>(this.apiUrl, { params });
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
      tap(updatedTask => console.log('Task updated successfully:', updatedTask)),
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