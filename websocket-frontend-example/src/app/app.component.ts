import {Component} from '@angular/core';
import {WebSocketService} from "./services/websocket.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public notifications = 0;

    constructor(private webSocketService: WebSocketService) {

        let stompClient = this.webSocketService.connect();

        stompClient.connect({}, frame => {

            stompClient.subscribe('/topic/notification', notifications => {

                this.notifications = JSON.parse(notifications.body).count;

            })

        });
    }
}
