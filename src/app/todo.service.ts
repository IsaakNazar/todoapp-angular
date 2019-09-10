import {Subject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TodoModel} from './todo.model';

@Injectable()
export class TodoService {

  datas: TodoModel[] = [];
  private todoUpdated = new Subject<TodoModel[]>();

  constructor(private http: HttpClient) {
  }

  addTodoList(name: string) {
    const todos: TodoModel = {id: null, name: name};
    this.http.post<{message: string, todoId: string}>('http://localhost:3000/api/todos', todos)
      .subscribe(resp => {
        todos.id = resp.todoId;
        this.datas.push(todos);
        this.todoUpdated.next([...this.datas]);
        console.log('response', resp);
      });
  }

  getTodoList() {
    this.http.get<{message: string, todos: any}>('http://localhost:3000/api/todos')
      .pipe(
        map(todoData => {
          return todoData.todos.map(todos => {
            return {
              id: todos._id,
              name: todos.name
            };
          });
        })
      )
      .subscribe(transformedTodos => {
        this.datas = transformedTodos;
        this.todoUpdated.next([...this.datas]);
      });
  }

  getPostUpdateListener() {
    return this.todoUpdated;
  }

  deleteTodo(todoId) {
    this.http.delete('http://localhost:3000/api/todos/' + todoId)
      .subscribe( () => {
        this.datas = this.datas.filter(post => post.id !== todoId);
        this.todoUpdated.next([...this.datas]);
        });
  }

}
