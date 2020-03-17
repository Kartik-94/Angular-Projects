import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = true;
  constructor() { }

  ngOnInit(): void {
  setTimeout(() =>{
    this.allowNewServer = false;
  },2000); 
  }

}
