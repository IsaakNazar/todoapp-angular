import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {
  @Input() todoItem;

  constructor() { }

  ngOnInit() {
  }

}
