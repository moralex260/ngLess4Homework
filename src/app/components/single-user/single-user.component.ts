import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Post, User} from '../models/models';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute , private userService: UserService, private postService: PostService,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => userService.getSingleUser(params.id).subscribe(value => this.users = value));
    this.activatedRoute.params.subscribe(params => postService.getAllPostsForUserId(params.id).subscribe(value => this.posts = value));
  }
  @Input()
users: User[];
posts: Post[];
//   getAllPostsForUserId(id: number): void {
// this.postService.getAllPostsForUserId(id).subscribe(value => this.posts = value);
//   }
  showPosts(u: User): void {
    this.router.navigate(['posts', u.id ], {state: {u}});
  }
  ngOnInit(): void {
  }

}
