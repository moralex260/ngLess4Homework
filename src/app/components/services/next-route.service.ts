import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NextRouteService implements CanActivate{

  constructor() { }

  canActivate(): boolean  {
    return confirm('are you want go far?');
  }
}
