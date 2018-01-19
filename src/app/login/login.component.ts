import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from "../shared/services/local-storage.service";
import { JwtTokenService } from "../shared/services/json-web-token.service";
import { ApiService } from "../shared/services/api.service";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  private url_api = "api/login";

  login: {}={
    user_name: "",
    password: ""
  }
  error: boolean = false;
  constructor(
    private local: LocalStorageService,
    private jwt: JwtTokenService,
    private http: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.checkToken();
  }

  loginAutenticantion(){
    event.preventDefault();
    let response = {
      token: "",
      error: ""
    };
    this.http
      .postWithoutToken(this.url_api, this.login)
      .then(res => {
        response.token = res.json().token;
        this.jwt.token = response.token; 
        this.error = false;      
        location.reload();
      }).catch(err => {
        response.error = err.json().error;
        this.error = true;
      });
  }
  checkToken(){
    if(this.auth.check){
      this.router.navigateByUrl("/admin/dashboard");
    }
  }

}
