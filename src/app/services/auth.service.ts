import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/user';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }


isLogin: boolean = false;

isAuthenticated(){
  const promise = new Promise<boolean>((resovle,reject)=>{
    setTimeout(()=>resovle(this.isLogin),100);
  });

  return promise;
}

login(username:string, password:string): Observable<any> {
  return this.http.post(AUTH_API+'/auth',{username:username, password:password},{headers:{'Content-Type':'application/json'}});
}


getProfile(token:string):Observable<any>{
  return this.http.get(AUTH_API+'/info',{headers:{'Content-Type':'application/json', 'X-AUTH-TOKEN':token}});
}

setLogin(isLogin:boolean){
  this.isLogin = isLogin;
}

getLogin():boolean{
  return this.isLogin;
}


getUserInfo():Observable<any>{
  return this.http.get(AUTH_API+'/info',httpOptions);
}


}
