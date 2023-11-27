import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface todo {
  userId: number,
  id: number,
  title: string,
  done: boolean,
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
    <span>
      {{newTodo.title}}
    </span>
    <button>Done</button>
    <button>Remove</button> 
  </div>
    
  `,
})
export class TodoComponent {
  @Input() newTodo!: todo;
}
