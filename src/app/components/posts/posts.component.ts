import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {User} from '../../interfaces/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  currentUserId: string;
  posts: User;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      this.currentUserId = param.get('userId');
      this.postService.getPostByUserId(this.currentUserId).subscribe((data: User) => {
        this.posts = data;
      });
    });
  }

}
