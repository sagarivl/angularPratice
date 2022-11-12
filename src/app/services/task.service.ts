import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3001/todos';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTask(task: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Todo>(url);
  }

  // updateTaskReminder(task: Todo): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Todo>(url, task);
  // }

  addTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, task);
  }
}
