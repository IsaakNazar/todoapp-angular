import {Subject} from 'rxjs';

export class TodoService {

  subject = new Subject();
  todoList = ['one', 'two'];

  constructor() {
  }

  addTodoList(value) {
    this.todoList.push(value);
    this.subject.next(this.todoList);
  }

  getTodoList() {
    return this.todoList;
  }

  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }

  deleteAllTodos() {
    this.todoList = [];
    this.subject.next(this.todoList);
  }

}
