import {Component, OnInit, ViewChild} from '@angular/core';
import {TodoService} from '../todo.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @ViewChild('f') inputForm: NgForm;


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.inputForm);
  }

  onSubmit() {
    this.todoService.addTodoList(this.inputForm.value.input_text);
    this.inputForm.form.patchValue({input_text: ''});
  }

}
