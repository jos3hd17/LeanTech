import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginInfo = {
    user: 'Jose',
    password: 'jose'
  };

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return  of(this.loginInfo ? true : false);
  }
}
