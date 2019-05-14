import {Subject} from 'rxjs';
import {ConfigService} from './config.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  subject = new Subject();
  todoList = [];

  constructor(private configService: ConfigService) {
  }

  getTodoListRequest() {
    return this.configService.getConfig();
  }

  addTodoList(value) {

    this.todoList.push(value);
    this.subject.next(this.todoList);
  }

  getTodoList() {
    return this.getTodoListRequest().subscribe(todos => {
      this.todoList = todos;
    });
  }

  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }

  deleteAllTodos() {
    this.todoList = [];
    this.subject.next(this.todoList);
  }

}
