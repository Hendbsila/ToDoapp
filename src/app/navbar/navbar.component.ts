import { Component, OnInit } from '@angular/core';
import { LoginServService } from '../login-serv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginSer:LoginServService) { }

  ngOnInit(): void {
  }
  logout() {
    this.loginSer.seDeconnecter();
  }
  iLogging() {
    return this.loginSer.estConnecte();
  }

}
