import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayweather',
  templateUrl: './displayweather.component.html',
  styleUrls: ['./displayweather.component.css']
})
export class DisplayweatherComponent {

  @Input() weatherdataarray;
  constructor() { }

}
