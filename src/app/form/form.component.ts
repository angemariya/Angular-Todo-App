import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit($event)" class="form">
      <h1>{{ title }}</h1>
      <input type="text" placeholder="Enter your todo" [(ngModel)]="newTodoTitle" name="toDoText">
      <button type="submit" [disabled]="!myForm.valid">Add</button>
    </form>
  `,
  styles: `
    .form {
      max-width: 400px;
      margin: auto;
    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input, button {
      margin-bottom: 16px;
    }
  `
})
export class FormComponent {
  title = 'Введите свой todo';
  newTodoTitle: string = '';

  constructor(private todoService: TodoServiceService) { }

  onSubmit(event: Event) {
    event.preventDefault();
    const newTodo = {
      userId: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * 100),
      title: this.newTodoTitle,
      done: false,
    };
    this.todoService.addTodo(newTodo);
    this.newTodoTitle = '';
  }
}

