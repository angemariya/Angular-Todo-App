0
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit($event)" class="form" novalidate>
      <h1>{{ title }}</h1>
      <input type="text" placeholder="Enter your todo" [(ngModel)]="toDoText" name="toDoText">
      <button type="submit">Add</button>
    </form>
  `,
})
export class FormComponent {
  title = 'Enter your todo';
  toDoText: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted', this.toDoText);
    this.toDoText = '';
  }
}

