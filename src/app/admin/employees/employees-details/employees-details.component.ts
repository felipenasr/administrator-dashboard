import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router/';
import { Router } from '@angular/router';

//services
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';

//models
import { EmployeeDetail } from '../../../shared/models/employees-models/employeeDetail.model';




@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent implements OnInit {

  private id: Number;
  text_inpt: String = "";
  changes: Boolean = false;
  api_url = "";
  route_url="";
  data: EmployeeDetail;
  hasData: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private http: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }
  


  ngOnInit() {
    this.checkToken();

    this.route.params.forEach((params: Params)=>{
      this.id =+params['id'];
    });
    this.api_url = "api/funcionarios/"+this.id;
    this.route_url = "admin/funcionarios/"+this.id;
    this.getUserInfor(this.api_url);
  }
  
  getUserInfor(route){
    return this.http.get(route).then(res =>{
      this.http.refreshToken();
      this.data = res.json() as EmployeeDetail;
      this.hasData=true;
      console.log(this.data);
      
    }).catch(err => this.http.handleError(err))
  }


  edit(input: HTMLInputElement, btn: HTMLElement){
    this.text_inpt = input.value;
    input.removeAttribute("disabled");
    input.focus();
    btn.classList.add("remove");
  }
  verifyOut(input: HTMLInputElement, btn: HTMLElement){
    if(input.value === this.text_inpt){
      input.setAttribute("disabled", "true");
      btn.classList.remove("remove");
      this.changes = false;
    }else{
      this.changes = true;
    }
    console.log(this.changes);
  }

  checkToken(){
    if(!this.auth.check){
      this.router.navigateByUrl("/login");
    }
  }
}
