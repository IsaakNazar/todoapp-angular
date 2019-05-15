import {Component, OnInit, OnDestroy, ɵEMPTY_ARRAY} from '@angular/core';
import {TodoService} from '../todo.service';
import {Subscription} from 'rxjs';
import {ConfigService} from '../config.service';
import {Log} from '@angular/core/testing/src/logger';
import {log} from 'util';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos;
  // private subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(resp => {
      this.todos = resp;
    });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


  deleteAll() {
    this.todoService.deleteAllTodos();
  }

}
