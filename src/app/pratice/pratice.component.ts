import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {

  showContent = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayContent () {
    this.showContent = !this.showContent;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

}
