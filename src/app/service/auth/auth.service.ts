import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;
  name = 'sonle';
  constructor(private router:Router) { }

  login(){
    this.isLogin = true;
  }

  logout(){
    this.isLogin = false;
    this.router.navigate(['']);
  }
}
