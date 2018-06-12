import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection } from '@aspnet/signalr';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appLanguage: string;
  constructor(private app: AppService, private router: Router) {
    /* const hubConnection = new HubConnection("/signalR");
    hubConnection.on('send', data => {
      console.log(data);
    });
    hubConnection.start().then(() => {
      console.log('connected');
    }); */

  } 

}
