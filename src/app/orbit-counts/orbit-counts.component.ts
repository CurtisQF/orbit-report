import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  types: [string, string, string, string, string, string] = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  total (type: string) {
    let tally: number = 0;
    for (let i = 0; i < this.satellites.length; i ++) {
      if (this.satellites[i].type.toLowerCase() === type.toLowerCase()) {
        tally += 1;
      }
    }
    return tally;
  }
  
}
