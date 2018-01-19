import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs, Headers } from "@angular/http";
import { JwtTokenService } from './json-web-token.service';

@Injectable()

export class DefaultRequestOpt extends RequestOptions{

  
  constructor(
    private jwtToken: JwtTokenService
  ) {
    super();
  }
  

  merge(options?: RequestOptionsArgs): RequestOptions{
    let headers = options.headers || new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Authorization', `Bearer ${this.jwtToken.token || ""}`);      

    options.headers = headers;
    
    return super.merge(options);
  }


}