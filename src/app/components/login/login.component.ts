import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;

  constructor(private auth:AuthService, private token:TokenStorageService, private router:Router) {}

  ngOnInit() {
  }

  login(){
    
    this.auth.login(this.username,this.password).subscribe(
      (data)=>{
        this.token.saveToken(data.data);
        this.auth.setLogin(true);
        this.router.navigate(['/']);
      },
      (erorr)=>{
        alert(erorr);
      }
    );
    
  }




}
