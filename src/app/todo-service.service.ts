import { Injectable } from '@angular/core';
import { todo } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor() { }

  async getTodos(): Promise<todo[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async getTodoById(id: number): Promise<todo> {
    const response = await fetch(`${this.url}/${id}`);
    const data = await response.json();
    return data;
  }

}
