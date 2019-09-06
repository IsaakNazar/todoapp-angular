import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Subscription} from 'rxjs';
import {TodoModel} from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: TodoModel[] = [];
  private todosSub: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList();
    this.todosSub = this.todoService.getPostUpdateListener()
      .subscribe((todos: TodoModel[]) => {
        this.todos = todos;
      });
  }

  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }

}
