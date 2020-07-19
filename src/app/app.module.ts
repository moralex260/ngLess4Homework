import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-user/all-user.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { PostComponent } from './components/post/post.component';
import {UserResolveService} from './components/services/user-resolve.service';
import {NextRouteService} from './components/services/next-route.service';
import {LeaveRouteService} from './components/services/leave-route.service';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'users', component: AllUsersComponent,
      resolve: {xxx: UserResolveService},
      canActivate: [NextRouteService],
      children:
      [{path: ':id', component: SingleUserComponent, children: [{path: 'posts/:id', component: PostComponent,
        canDeactivate: [LeaveRouteService]
      }]},
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
