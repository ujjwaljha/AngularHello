import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myAwesomeValue;
  @Output() myOutputValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.myAwesomeValue, ' is what i got');
    this.myOutputValue.emit('hello from the child');
  }

}
