import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  url = 'assets/todos.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.url);
  }
}
