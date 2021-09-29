import { DesignService } from './../appServices/design.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {

  constructor(private DesignService:DesignService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
    // return this.DesignService.userName.pipe(
    //   take(1),
    //   map(res =>{
    //     return res? true : false;
    //   })
    
  }
  
}
