import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ChildComponent) childFunction: any;
  data = 'parant data in child';
  message: any;
  gettingMessage(e: any) {
    this.message = e;
  }
  childMethadcalling() {
    this.childFunction.sendDataToParent();
  }
}
