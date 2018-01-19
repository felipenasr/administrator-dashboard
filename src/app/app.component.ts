import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./shared/navbar/navbar.component"
import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private auth: AuthService
  ){


  }

  ngOnInit(){

  }
}
