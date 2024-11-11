import { Component, inject } from '@angular/core';
import { TodosStore } from './todo.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTodoTitle = '';
  store = inject(TodosStore)
  allTodos = this.store.allTodos;
  activeCount = this.store.activeCount;
  
  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.store.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }

  removeTodo(id: number): void {
    this.store.removeTodo(id);
  }

}
