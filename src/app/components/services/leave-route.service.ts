import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Post} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LeaveRouteService implements CanDeactivate<Post[]>{

  constructor() { }

  canDeactivate(): boolean {
    return confirm('are you shure?');
  }
}
