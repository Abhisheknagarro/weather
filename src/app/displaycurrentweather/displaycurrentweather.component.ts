import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaycurrentweather',
  templateUrl: './displaycurrentweather.component.html',
  styleUrls: ['./displaycurrentweather.component.css']
})
export class DisplaycurrentweatherComponent {

  @Input() currentweather;
  constructor() { }

}
