import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TodoModel} from './todo.model';
import {environment} from '../environments/environment';

@Injectable()
export class TodoService {

  datas: TodoModel[] = [];
  private todoUpdated = new Subject<TodoModel[]>();

  constructor(private http: HttpClient) {
  }

  addTodoList(name: string) {
    const todos: TodoModel = {id: null, name: name, isCompleted: false};
    this.http.post<{ message: string, todoId: string }>(environment.baseApi, todos)
      .subscribe(resp => {
        todos.id = resp.todoId;
        this.datas.push(todos);
        this.todoUpdated.next([...this.datas]);
        console.log('response', resp);
      });
  }

  getTodoList() {
    this.http.get<{ message: string, todos: any }>(environment.baseApi)
      .pipe(
        map(todoData => {
          return todoData.todos.map(todos => {
            return {
              id: todos._id,
              name: todos.name,
              isCompleted: todos.isCompleted
            };
          });
        })
      )
      .subscribe(transformedTodos => {
        this.datas = transformedTodos;
        this.todoUpdated.next([...this.datas]);
      });
  }

  updateTodo(todoId, isCompleted) {
    this.http.patch(`${environment.baseApi}/${todoId}`, {isCompleted: !isCompleted})
      .subscribe(() => {
        const updatedTodos = [...this.datas];

        this.datas = updatedTodos.map(todo => {
          if (todo.id === todoId) {
            todo.isCompleted = !isCompleted;
          }
          return todo;
        });

        this.todoUpdated.next([...this.datas]);
      });
  }

  deleteTodo(todoId) {
    this.http.delete(`${environment.baseApi}/${todoId}`)
      .subscribe(() => {
        this.datas = this.datas.filter(post => post.id !== todoId);
        this.todoUpdated.next([...this.datas]);
      });
  }

  getPostUpdateListener() {
    return this.todoUpdated;
  }

}
