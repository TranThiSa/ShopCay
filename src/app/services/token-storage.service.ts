import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

constructor(private auth:AuthService) { }

singOut():void{
  this.auth.setLogin(false);
  window.localStorage.clear();
}

public saveToken(token: string): void {
 
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.setItem(TOKEN_KEY, token);
}

public getToken(): any {
  return localStorage.getItem(TOKEN_KEY);
}

}
