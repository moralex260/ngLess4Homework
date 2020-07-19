import {Component, Input, OnInit} from '@angular/core';
import {Post, User} from '../models/models';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
posts: Post[];
users: User[];
post: Post;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
              private postService: PostService) {
    activatedRoute.params.subscribe(params => postService.getOnePost(params.id)
      .subscribe(value => this.post = value));
  }
  ngOnInit(): void {
  }
}
