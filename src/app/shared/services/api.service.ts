import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/toPromise";
import { environment } from '../../../environments/environment';
import { DefaultRequestOpt } from "./default-request-opt.service";
import { JwtTokenService } from './json-web-token.service';
import { AuthService } from '../services/auth.service';



@Injectable()
export class ApiService {
    
    constructor(
        private http: Http,
        private defaultRequest: DefaultRequestOpt,
        private tkn: JwtTokenService,
        private auth: AuthService
    ){
        
    }

    header_no_token = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    api_header = this.defaultRequest.merge(new RequestOptions());
    
    private api_url = environment.api_url;
    
    get(api_route) {
        const url_get = environment.api_url+api_route;
        return this.http.get(url_get, this.api_header)
        .toPromise();
    }    


    update(api_route, object: {}):Promise<any>{
        const url_put = environment.api_url+api_route;
        return this.http.put(
            url_put,
            JSON.stringify(object),
            this.api_header).toPromise();


    }

    postWithoutToken(api_route, object: {}){
        const url_post = environment.api_url+api_route;        
        return this.http.post(
            url_post,
            JSON.stringify(object),
            {headers: this.header_no_token}
        ).toPromise();
    }



    refreshToken(){

        let newToken;
        let fun =  this.http.post(
            this.api_url+"api/refresh_token",
            this.tkn.token,
            this.api_header            
        ).toPromise().then(res => {
            newToken = res.json();
            this.tkn.token = newToken.token;
            return res; 
        }).catch(err => this.handleError(err));

        
        return fun;
    }
    
    post(api_route, object: any){
        const url_post = environment.api_url+api_route;        
        return this.http.post(
            url_post,
            JSON.stringify(object),
            this.api_header
        ).toPromise();
    }

    handleError(error: any):Promise<any> {
        location.reload();
        this.auth.logout();
        return Promise.reject(error.message || error);
    }
}