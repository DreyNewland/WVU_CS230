import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post-component',
    templateUrl: 'post-component.html',
    styleUrls: ['./post-component.css']
})
export class PostComponent {
    @Input()
    title! : string;
    @Input()
    imgPath! : string;
    @Input()
    subreddit! : string;
    @Input()
    poster! : string;
    @Input()
    votes! : string;
    @Input()
    daysago! : string;
    @Input()
    comments! : string
}