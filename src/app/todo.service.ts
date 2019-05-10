import {Subject} from 'rxjs';

export class TodoService {

  subject = new Subject();
  todoList = [];

  constructor() {
  }

  addTodoList(value) {
    this.todoList.push(value);
    this.subject.next(this.todoList);
  }

  getTodoList() {
    return this.todoList;
  }

}
