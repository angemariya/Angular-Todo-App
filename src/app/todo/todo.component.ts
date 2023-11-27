import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { TodoServiceService } from '../todo-service.service';


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
  <div *ngFor="let todo of todos$ | async" >
    <span [ngClass]="{'done': todo.done}">
      {{todo.title}}
    </span>
    <button (click)="markAsDone(todo.id)">Done</button>
    <button (click)="deleteTodo(todo.id)">Remove</button> 
  </div>
    
  `,
  styles: `
    .done {
      text-decoration: line-through;
    }
  `

})
export class TodoComponent {
  constructor(private TodoServiceService: TodoServiceService) { }
  
  todos$ = this.TodoServiceService.todos$;

  markAsDone = (id: number) => {
    this.TodoServiceService.markAsDone(id);
  }

  deleteTodo = (id: number) => {
    this.TodoServiceService.deleteTodo(id)
  }

}
