import { Injectable } from '@angular/core';
import { todo } from './todo/todo.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  limitTodos = 5;
  private todosSubject = new BehaviorSubject<todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  addTodo = (newTodo: todo) => {
    const currentTodos = this.todosSubject.value;
    const newTodos = [newTodo, ...currentTodos ];
    this.todosSubject.next(newTodos);
  }

  addAsyncTodos(todos: todo[]) {
    const currentTodos = this.todosSubject.value;
    const newTodos = [...currentTodos, ...todos];
    this.todosSubject.next(newTodos);
  }

  markAsDone = (id: number) => {
    const currentTodos = this.todosSubject.value;
    const newTodos = currentTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      }
      return todo;
    });
    this.todosSubject.next(newTodos);
  }

  deleteTodo = (id: number) => {
    const currentTodos = this.todosSubject.value;
    const newTodos = currentTodos.filter(todo => todo.id !== id);
    this.todosSubject.next(newTodos);
  }

  async getTodos(): Promise<todo[]> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data.slice(0, this.limitTodos);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getTodoById(id: number): Promise<todo> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return {} as todo;
    }
  }
}
