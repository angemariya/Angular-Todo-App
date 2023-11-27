import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div class="container">
    <h1>{{ title }}</h1>
    <form #myForm="ngForm" (ngSubmit)="onSubmit($event)" class="form">
      <input type="text" placeholder="Enter your todo" [(ngModel)]="newTodoTitle" name="toDoText">
      <button type="submit" [disabled]="!myForm.valid" class="button-55">Add</button>
    </form>
  </div>
  `,
  styles: `
    .container {
      max-width: 60vw;
      margin: auto;
      padding-top: 100px;
    }

    .form {
      display: grid;
      grid-template-columns: 1fr auto;
      width: 100%;
      margin-bottom: 30px;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    input, button {
      height: auto;
      line-height: 40px;
    }
    input[type="text"] {
      padding: 0 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      outline: none;
    }
    .button-55 {
      align-self: center;
      background-color: #fff;
      background-image: none;
      background-position: 0 90%;
      background-repeat: repeat no-repeat;
      background-size: 4px 3px;
      border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
      border-style: solid;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
      box-sizing: border-box;
      color: #41403e;
      cursor: pointer;
      display: inline-block;
      font-family: Neucha, sans-serif;
      font-size: 1rem;
      line-height: 23px;
      outline: none;
      padding: .75rem;
      text-decoration: none;
      transition: all 235ms ease-in-out;
      border-bottom-left-radius: 15px 255px;
      border-bottom-right-radius: 225px 15px;
      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .button-55:hover {
      box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
      transform: translate3d(0, 2px, 0);
    }

    .button-55:focus {
      box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    }
  `
})
export class FormComponent {
  title = 'Enter your todo';
  newTodoTitle: string = '';

  constructor(private todoService: TodoServiceService) { }

  onSubmit(event: Event) {
    event.preventDefault();
    const newTodo = {
      userId: Math.random() * 100,
      id: Math.random() * 100,
      title: `${this.newTodoTitle === "" ? "Empty Todo" : this.newTodoTitle}`,
      done: false,
    };
    this.todoService.addTodo(newTodo);
    this.newTodoTitle = '';
  }
}

