import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos;
  // private subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(resp => {
      this.todos = resp;
    });
  }

  deleteAll() {
    this.todoService.deleteAllTodos();
  }

}
