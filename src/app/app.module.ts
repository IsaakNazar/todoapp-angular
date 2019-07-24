import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SingleTodoComponent } from './todo-list/single-todo/single-todo.component';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodoListComponent,
    SingleTodoComponent,
    PopupConfirmComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
