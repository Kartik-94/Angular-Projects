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
  serverCreationCode: string;
  textColor: string;
  serverName: string;

  constructor() { 
    this.serverCreationCode = "No Server Created";
    this.textColor = "red";

    setTimeout(() =>{
      this.allowNewServer = false;
    },2000); 
  }

  ngOnInit(): void {
  }

  onServerClick(){
    this.serverCreationCode = "New Server Created !!!!"
    this.textColor = "green";  
  }

  onMessageInput(event: any){
    this.serverName=event.target.value;
  }
  
}
