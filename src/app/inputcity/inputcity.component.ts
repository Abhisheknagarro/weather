import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputcity',
  templateUrl: './inputcity.component.html',
  styleUrls: ['./inputcity.component.css']
})
export class InputcityComponent {
  cityname: string;
  @Output() cityEvent = new EventEmitter<string>();

  constructor() { }

  sendCity() {
    this.cityEvent.emit(this.cityname)
  }

}
