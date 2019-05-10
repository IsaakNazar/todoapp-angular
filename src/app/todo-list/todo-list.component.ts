import {Component, OnInit, OnDestroy, ɵEMPTY_ARRAY} from '@angular/core';
import {TodoService} from '../todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: any;
  private subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    // this.todos = this.todoService.getTodoList();
    this.todoService.subject.subscribe(
      value => {
        this.todos = value;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
