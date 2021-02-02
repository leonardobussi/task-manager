import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {



  constructor(private route: Router) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    var token = localStorage.getItem('token')
    if(token){
      return true
    }else{
      this.route.navigate(['/home'])
      return false
    }
   
  }

}
