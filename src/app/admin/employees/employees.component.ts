import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { ApiService } from '../../shared/services/api.service';
import { AuthService } from '../../shared/services/auth.service';

//models
import { EmployeesApiData } from "../../shared/models/employees-models/employeesApiData.model";
import { EmployeesCharges } from '../../shared/models/employees-models/employeesCharges.model';
import { EmployeesPersonalData } from '../../shared/models/employees-models/employeesPersonalData.model';
import { Employees } from '../../shared/models/employees-models/employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  
  teste: EmployeesApiData;
  private api_url = "api/funcionarios?items=0";
  private api_data: Array<EmployeesApiData>;
  private employees: Array<Employees> =[];
  private employeesSearchResult: Array<Employees> =[];
  hasError: boolean = false;
  hasSearch: Boolean = false;
  
  constructor(
    private http: ApiService,
    private router: Router,
    private auth: AuthService
  ){}

  ngOnInit() {
    this.getEmplyees();
    this.checkToken();
  }

  getEmplyees(){
    return this.http.get(this.api_url).then(res => {
      this.http.refreshToken();
      this.hasError = true;
      this.api_data = res.json().data as Array<any>;
      this.RendEmplyees(res.json().data as Array<EmployeesApiData>);
      console.log(res.json().data);
    }).catch(error => {
      this.http.handleError(error)
      return error;
    });
  }
  RendEmplyees(data: Array<EmployeesApiData>){
    data.forEach(element =>{
      element = element as EmployeesApiData;
      let charge = new EmployeesCharges(
        element.cargo.nome,
        element.departamento.nome,
        element.cargo.salario,
        element.pessoa.pessoa_type,
      )
      charge.vinculo = charge.vinculo.substring(11);
      charge.vinculo = charge.vinculo.substring(0,6)+" "+charge.vinculo.substring(6);
      let personal = new EmployeesPersonalData(
        element.pessoa.nome,
        element.pessoa.type.razao_social,
        element.pessoa.type.rg,
        element.pessoa.type.cpf,
        element.pessoa.type.cnpj,
        element.pessoa.type.data_nascimento
        
      )
      
      let employee = new Employees(
        element.id,
        personal.nome, 
        charge.vinculo,
        charge,
        element.empresaPertencente.razao_social,
        personal
      )
      employee.empresa = employee.empresa.substring(0,6);
      this.employees.push(employee);
    })
    console.log(this.employees);
  }
  
  findEmployee(term: String){
    console.log(term);
    
    this.employees.forEach((element, index)=>{
      this.hasSearch = true;
  
      if ( element.nome == term || element.dadosPessoais.cpf == term ||element.dadosPessoais.cnpj == term){
          this.employeesSearchResult.push(element);
      }
      if(term==""){
         this.hasSearch = false;
         this.employeesSearchResult = [] as Employees[];      
      }
    })
  }
  checkToken(){
    if(!this.auth.check){
      this.router.navigateByUrl("/login");
    }
  }
}

