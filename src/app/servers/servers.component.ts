import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Using external html template
  //Or using inline template(only for few things) e.g template: `<app-server></app-server>`
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test Server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    //this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
