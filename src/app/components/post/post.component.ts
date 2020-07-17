import {Component, Input, OnInit} from '@angular/core';
import {Post, User} from '../models/models';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
              private postService: PostService, private router: Router) {
    // this.activatedRoute.params.subscribe(params => postService.getAllPostsForUserId(params.userId).
    // subscribe(value => this.posts = value));
    // tslint:disable-next-line:no-unused-expression
    console.log(history.state);
  }
  ngOnInit(): void {
  }

  getPostDetails(p: Post): void {
    this.router.navigate(['posts/:id', p.id]);
  }
}
