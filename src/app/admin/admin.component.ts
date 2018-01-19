import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service"


@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.checkToken();
  }

  checkToken(){
    if(!this.auth.check){
      this.router.navigate(["/login"]);   
    }else{
      this.router.navigate(["/admin/dashboard"]);
    }

  }

}
