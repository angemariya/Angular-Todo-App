import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { TodoComponent, todo } from '../todo/todo.component';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormComponent, TodoComponent],
  template: `
    <main>
      <app-form />
      <section>
        <app-todo *ngFor="let todo of todoList" [newTodo]="todo"/>
      </section>
    </main>
  `,
})
export class HomeComponent {
  todoList: todo[] = [];
  todoService: TodoServiceService = inject(TodoServiceService);
  constructor() {
    this.todoService.getTodos().then(todos => this.todoList = todos)
  }
}
