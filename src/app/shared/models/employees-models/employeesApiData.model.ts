export class EmployeesApiData{

    constructor(
        public id: any,
        public departamento_id: number,
        public cargo_id: number,
        public empresa_id: number,
        public criado_em: string,
        public atualizado_em: string,
        public pessoa: Pessoa,
        public departamento: Departamento,
        public cargo: Cargo,
        public empresaPertencente: EmpresaPertencente
    ){}
}


class Pessoa {
    
    
    constructor(
        public id: number,
        public nome: string,
        public site: string,
        public pessoa_type: string,
        public pessoa_id: number,
        public criado_em: string,
        public atualizado_em: string,
        public type: Type

    ){}
}


class Type {
    constructor(
        public id: number,
        public razao_social: string,
        public cnpj: string,
        public inscricao_estadual: any,
        public criado_em: string,
        public atualizado_em: string,
        public sobrenomestring: string,
        public cpf: string,
        public rg: string,
        public data_nascimento: string,
        public sexo: string
    ){}
}


class Departamento {
    constructor(
        public id: number,
        public nome: string,
        public descricao: any,
        public observacao: any,
        public layout_id: any,
        public divisao: any,
        public codigo: string,
        public vinculo_id: number,
        public vinculo_type: string,
        public criado_em: string,
        public atualizado_em: string
    ){}
}

class Cargo {
    constructor(
        public id: number,
        public nome: string,
        public salario: string,
        public descricao: any,
        public observacao: any,
        public criado_em: string,
        public atualizado_em: string,
    ){}
}

    
    

class EmpresaPertencente {
    constructor(
        public id: number,
        public razao_social: string,
        public cnpj: string,
        public inscricao_estadual: any,
        public criado_em: string,
        public atualizado_em: string
    ){}
}

