import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() childData = new EventEmitter();
  @Input() parantData: any;

  data = '';

  constructor() {}
  sendDataToParent() {
    return this.data = 'my data will access from parent';
  }

  sendMessage() {
    this.childData.emit('my name is child data');
  }

  ngOnInit(): void {}
}
