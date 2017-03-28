import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Using external html template
  //Or using inline template(only for few things) e.g templateUrl: `<app-server></app-server>`
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
