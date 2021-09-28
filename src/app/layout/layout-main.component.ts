import {Component} from "@angular/core"
import { mock_posts1 } from "../BodyComponents/mock-posts1";
import { Post } from "../BodyComponents/post1.model";

@Component({
    selector: "app-layout-main",
    templateUrl: "layout-main.component.html",
    styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent{
    posts1: Post [] = [];

    constructor() {
        for(var posts1 of mock_posts1){
            this.posts1.push(new Post(posts1))
        }
    }
}