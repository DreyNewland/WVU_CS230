import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/BodyComponents/post1.model';
import { MockPostService } from 'src/app/header/posts.service';



@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  posts1: Post [] = [];

    constructor(private infoService: MockPostService) {
      
    }

  ngOnInit(): void {
    console.log('Showing data');
    this.showUserInfo();
}

showUserInfo(){
    this.infoService.getMockPost2().subscribe((data: Post[]) => {
        console.log(data);
        this.posts1 = data;
    })
}
}
