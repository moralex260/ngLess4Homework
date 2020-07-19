import {Component, Input, OnInit} from '@angular/core';
// import {UserService} from '../services/user.service';
import {User} from '../models/models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUsersComponent implements OnInit {
  @Input()
  users: User[];
  // constructor(private usersService: UserService, private router: Router){
  //   this.usersService.getAllUsers().subscribe(data => this.users = data) ;
  // }
  constructor(private activatedRoute: ActivatedRoute , private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.xxx);
  }

  ngOnInit(): void {
  }
  getUserDetails(u: User): void{
    this.router.navigate(['users', u.id], {state: {u}});
  }
}
