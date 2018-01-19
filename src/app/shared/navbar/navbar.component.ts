import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    $(".button-collapse").sideNav();    
  }

  logout(){
    this.auth.logout();
  }
  refresh(){
    location.reload();
  }

}
