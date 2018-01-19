import { EmployeesCharges } from "./employeesCharges.model";
import { EmployeesPersonalData } from "./employeesPersonalData.model";

export class Employees {

    constructor(
        public id: String='',
        public nome: String="", 
        public pessoa: String="",
        public cargo: EmployeesCharges,
        public empresa: String="",
        public dadosPessoais: EmployeesPersonalData
        
    ){
    }
}
