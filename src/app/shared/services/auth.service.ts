import { Injectable } from '@angular/core';
import { JwtTokenService } from './json-web-token.service';

@Injectable()
export class AuthService {
  
  public check: Boolean = false;

  constructor(
    private jwtToken: JwtTokenService
  ) { 
    this.check = this.jwtToken.token ? true : false;  
  }

  logout(){
    this.check = false;
    this.jwtToken.token = null;
  }
}
