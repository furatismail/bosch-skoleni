import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export interface Todo {
    id: number;
    title: string;
};

export interface TodosState {
    todos: Array<Todo>;
};

const initialState: TodosState = {
    todos: [],
};

export const TodosStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ todos }) => ({
        allTodos: computed(() => todos()),
        activeCount: computed(() => todos().length),
    })),
    withMethods((store) => ({
        addTodo(title: string): void {
            const newTodo: Todo = { id: Date.now(), title };
            patchState(store, { todos: [...store.todos(), newTodo] });
        },

        removeTodo(id: number): void {
            patchState(store, { todos: store.todos().filter(todo => todo.id !== id) });
        }
    })),
);
