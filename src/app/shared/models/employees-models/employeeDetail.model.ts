export class EmployeeDetail {
    constructor(
        
        public id: any = "",
        public departamento_id: any = "",
        public cargo_id: any = "",
        public empresa_id: any = "",
        public criado_em: string = "",
        public atualizado_em: string = "",
        public pessoa: Pessoa,
        public departamento: Departamento,
        public cargo: Cargo,
        public empresaPertencente: EmpresaPertencente   
        
    ){}
    
}





class Pessoa {
    constructor(
        public id: any = "",
        public nome: string = "",
        public site: any = "",
        public pessoa_type: string = "",
        public pessoa_id: any = "",
        public criado_em: string = "",
        public atualizado_em: string = "",
        public type: Type
    ){}
}

class Type {
    constructor(
        public id: any = "",
        public razao_social: string = "",
        public cnpj: string = "",
        public inscricao_estadual: any = "",
        public criado_em: string = "",
        public atualizado_em: string = ""
    ){}
}

class Departamento {
    constructor(
        
        public id: any = "",
        public nome: string = "",
        public descricao: any = "",
        public observacao: any = "",
        public layout_id: any = "",
        public divisao: any = "",
        public codigo: string = "",
        public vinculo_id: any = "",
        public vinculo_type: string = "",
        public criado_em: string = "",
        public atualizado_em: string = ""
    ){}
}
class Cargo {
    constructor(
        public id: any = "",
        public nome: string = "",
        public salario: string = "",
        public descricao: any = "",
        public observacao: any = "",
        public criado_em: string = "",
        public atualizado_em: string = ""
    ){}
}

class EmpresaPertencente {
    constructor(
        public id: any = "",
        public razao_social: string = "",
        public cnpj: string = "",
        public inscricao_estadual: any = "",
        public criado_em: string = "",
        public atualizado_em: string = ""
    ){}
}