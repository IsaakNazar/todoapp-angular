import {Observable, Subject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TodoService {

  datas: Observable<any[]>;
  subject = new Subject();
  todoList;
  url = 'http://localhost:4444';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, public db: AngularFirestore) {
    this.datas = this.db.collection('datas').valueChanges();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  addTodoList(value) {
    return this.http.post(
      `${this.url}/todos`,
      { 'name': value },
      this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getTodoList() {
    return this.http.get(`${this.url}/todos`);
  }

  getFirebase() {
    return this.datas;
  }

  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }

  deleteAllTodos() {
    this.todoList = [];
    this.subject.next(this.todoList);
  }

}
