import { Component, OnInit } from '@angular/core';
import { mock_posts2 } from 'src/app/BodyComponents/mock-posts2';
import { Post } from 'src/app/BodyComponents/post1.model';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  posts1: Post [] = [];

    constructor() {
        for(var posts1 of mock_posts2){
            this.posts1.push(new Post(posts1))
        }
    }

  ngOnInit(): void {
  }

}
