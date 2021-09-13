import { Component } from "@angular/core";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: 'top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
    username:string = "Dreyintor55"
    numberKarma:number = 1
    numNotifications:number = 21
}