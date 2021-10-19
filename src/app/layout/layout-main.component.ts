import {Component} from "@angular/core"
import { Post } from "../BodyComponents/post1.model";
import { MockPostService} from "../header/posts.service";


@Component({
    selector: "app-layout-main",
    templateUrl: "layout-main.component.html",
    styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent{
    posts1: Post [] = [];

    constructor(private infoService: MockPostService) {

    }
    ngOnInit(): void {
        console.log('Showing data');
        this.showUserInfo();
    }

    showUserInfo(){
        this.infoService.getMockPost1().subscribe((data: Post[]) => {
            console.log(data);
            this.posts1 = data;
        })
    }
}