import { Component } from '@angular/core';
import { HelloWorldServico } from '../servico/helloworld.servico';

@Component({
  selector: 'app-hello',
  templateUrl: './helloworld.component.html',
})

export class HelloWorldComponent {

  private 
  constructor(private HelloWorldServico: HelloWorldServico)
  {

  }
  mostrarHelloWorld()
  {
    
  }
}
