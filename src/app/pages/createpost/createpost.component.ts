import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/BodyComponents/post1.model';
import { MockPostService } from 'src/app/header/posts.service';

@Component({
  selector: 'app-createpost-component',
  templateUrl: './createpost.component.html',
})
export class CreatePostComponent implements OnInit {
  array: Post [] = [];

  constructor(private infoService: MockPostService) { 

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.infoService.getMockPost2().subscribe((data: Post[]) => {
      this.array = data;
  })
  }
  onCreatePost(data:Post){
    data.comments = '0'
    data.votes = '0'
    data.daysago = '0'
    data.subreddit = 'r/' + data.subreddit
    data.poster = 'u/' + data.poster
    this.infoService.addPost(data, this.array.length).subscribe(data => {
        console.log(data)
    });
  }


}