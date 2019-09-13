import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {
  @Input() todoItem;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeTodo(itemToRemove) {
    if (confirm('Do you want to remove this todo?')) {
      this.todoService.deleteTodo(itemToRemove);
    }
  }

  toggleCheckbox(itemToToggle: string, isCompleted: boolean) {
    this.todoService.updateTodo(itemToToggle, isCompleted);
    console.log(itemToToggle, isCompleted);
  }

}
