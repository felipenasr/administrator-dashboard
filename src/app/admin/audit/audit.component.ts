import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  
  private api_url = "api/empresas"

  api_2 = "http://cprado.com.br/api/empresas";
  headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.token || ""}`
  })
  constructor(
    // private http: ApiService
    private http: Http
  ) { }

  ngOnInit() {
    this.getJson();
  }

  // getJson(){
  //   let b: Array<Object>;
  //   let a = this.http.get(this.api_url).then((res)=>{
  //     let b = res.json();
  //     let headers = res.headers._headers;
  //     console.log(headers.has("Authorization"));
  //     console.log(res.json());
      
  //   })
    
  //   console.log(a);
  
  // }

  getJson(): Observable<any>{
    let a = this.http
          .get(this.api_2, {headers: this.headers})
          .map(res=>{
            console.log(res.json())
          })
    console.log(a);
    return a;
  }  

}
