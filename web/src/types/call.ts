export interface Call {
    id_call: string,
    titulo: string,
    status:string,
    desc:string,
    prioridade:string,
    dt_criacao:Date,
    id_equipe:string,
    criado_por?:string,
    criado_para?:string,
}
