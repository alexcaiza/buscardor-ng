import { Post, PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  postSearch: string = "";

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().then(posts => {
      this.posts = posts;
    });

  }

}
