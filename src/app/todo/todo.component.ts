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
    <span>
      {{todo.title}}
    </span>
    <button>Done</button>
    <button>Remove</button> 
  </div>
    
  `,
})
export class TodoComponent {
  constructor(private TodoServiceService: TodoServiceService) { }
  todos$ = this.TodoServiceService.todos$;

}
