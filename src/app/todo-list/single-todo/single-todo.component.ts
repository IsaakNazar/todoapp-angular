import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {
  @Input() todoItem;
  @Input() id: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeTodo(itemToRemove: number) {
    this.todoService.deleteTodo(itemToRemove);
  }

}
