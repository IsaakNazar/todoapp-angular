import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  inputText = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.inputText) {
      this.todoService.addTodoList(this.inputText);
      this.inputText = '';
    }
  }

}
