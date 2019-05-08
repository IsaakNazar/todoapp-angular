import { Injectable} from '@angular/core';
import {from, Subject} from 'rxjs';

export class TodoService {

  subject = new Subject<Array<string>>();
  todoList;
  // arrObs = from(this.todoList);

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
