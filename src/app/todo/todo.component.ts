import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { TodoServiceService } from '../todo-service.service';
import { OnInit } from '@angular/core';


export interface todo {
  userId: number,
  id: number,
  title: string,
  done: boolean,
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `
  <ng-container *ngIf="todos$ | async as todos; else loading">
    <div *ngFor="let todo of todos" class="todo-container">
      <span [ngClass]="{'done': todo.done}">
        {{todo.title}}
      </span>
      <button role="button" (click)="markAsDone(todo.id)" class="button-55 done-button">Done</button>
      <button role="button" (click)="deleteTodo(todo.id)" class="button-55 remove-button">Remove</button>
    </div>
  </ng-container>
  <ng-template #loading>
      Loading...
  </ng-template>
    
  `,
  styles: `
    .done {
      text-decoration: line-through;
      color: #ccc;
    }
    .todo-container {
      max-width: 60vw;
      display: grid;
      grid-template-areas: "todo done delete";
      grid-template-columns: 1fr auto auto;
      margin: auto;
      border-bottom: 1px solid #ccc;
    }
    .todo-container span {
      grid-area: todo;
      padding: 10px;
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
    .done-button {
      grid-area: done;
      cursor: pointer;
      background-color: #4caf50;
    }
    .remove-button {
      grid-area: delete;
      background-color: #f44336;
      cursor: pointer;
    }
    
  `
})
export class TodoComponent implements OnInit {
  constructor(private TodoService: TodoServiceService) { }

  todos$ = this.TodoService.todos$;

  markAsDone = (id: number) => {
    this.TodoService.markAsDone(id);
  }

  deleteTodo = (id: number) => {
    this.TodoService.deleteTodo(id)
  }

  ngOnInit() {
    console.log('Data loaded');

    this.TodoService.getTodos()
      .then((todos) => {
        this.TodoService.addAsyncTodos(todos);
        console.log('Data loaded');
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
