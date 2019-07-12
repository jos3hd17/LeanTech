import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isLoggedIn().toPromise().then(
      (resolved: boolean) => {
        if (!resolved) {
          this.router.navigate(['users']);
        }
        return resolved;
      },
      _ => _
    );
  }

}
