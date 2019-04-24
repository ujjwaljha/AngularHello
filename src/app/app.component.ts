import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  testing = 'test values';
  visible = true;
  counter = 0;

  constructor() {
    setInterval(() => {this.send2Server();}, 2000);
  }

  @ViewChild('myInputText') inputText;
   send2Server() {
     let data = this.inputText.nativeElement;
     console.log(data.value);
   }

   awesomeMethod(ev) {
     console.log(ev, 'got some text');
   }

  
  toggleDiv() {
    this.visible = !this.visible;
    this.counter++;
  }
}
