import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
   this.todos = this.todoService.getTodoList().valueChanges();
    // this.todoService.getTodoList().subscribe(x => console.log(x));
    this.todoService.getTodoList().valueChanges().subscribe(x => {
      console.log(x);
    });
  }

  deleteAll() {
    this.todoService.deleteAllTodos();
  }

}
