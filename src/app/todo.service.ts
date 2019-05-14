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
    return this.configService.getConfig().subscribe(todos => {
      this.todoList = todos;
    });
  }

  addTodoList(value) {
    // this.getTodoListRequest();
    // console.log(this.todoList);
    this.todoList.push(value);
    this.subject.next(this.todoList);
  }

  getTodoList() {
    this.getTodoListRequest();
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
