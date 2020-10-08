import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelloWorld } from '../model/helloworld';


var httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };


@Injectable({
  providedIn: 'root'
})
export class HelloWorldServico {

  url = 'https://localhost:44338/helloworld/';

  constructor(private http: HttpClient) {  }

  mostrarHelloWorld(): Observable<HelloWorld> {

    return this.http.get<HelloWorld>(this.url);

  }

 



}
