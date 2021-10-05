import { HttpClient } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component, Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "reddit-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined; 

    constructor(private http:HttpClient){
    }

    ngOnInit(): void {
        console.log('Sending get request to server');
        this.getUserInfo();
        console.log('Showing data');
        this.showUserInfo();
    }

    getUserInfo() {
        return this.http.get<UserInfo>("https://reddit-app-aeded-default-rtdb.firebaseio.com/my-info.json");
    }

    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}