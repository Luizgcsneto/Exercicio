import { Component } from '@angular/core';
import { HelloWorldServico } from '../servico/helloworld.servico';
import { HelloWorld } from '../model/helloworld';

@Component({
  selector: 'app-hello',
  templateUrl: './helloworld.component.html',
})

export class HelloWorldComponent {

  
  constructor(private HelloWorldServico: HelloWorldServico)
  {

  }
  mostrarHelloWorld()
  {

  }
}
