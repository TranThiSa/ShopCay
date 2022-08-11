import { Component, OnInit } from '@angular/core';
import { faHome, faAt, faTree, faUser, faCartPlus, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faHome = faHome;
  faAt = faAt;
  faTree = faTree;
  faUser = faUser;
  faCart = faShoppingCart;
  username!:string;

  constructor(public auth:AuthService, private token: TokenStorageService) { 
      if(this.token.getToken()!=null){
        this.auth.setLogin(true);
      }
  }

  ngOnInit() {
    if(this.token.getToken()!=null){
        this.auth.getUserInfo().subscribe(
          (item)=>{
            this.username = item.data.username;
          }
        );
    }
  }

  signOut(){
    this.token.singOut();
  }

}
