import { Component, inject } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TodoComponent, todo } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, TodoComponent],
  template: `
    <main>
      <app-form></app-form>
      <section>
        <app-todo></app-todo>
      </section>
    </main>
  `,
})
export class HomeComponent {
}
