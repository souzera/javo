import { Usuario } from "./usuario";

export interface Equipe{
    id: string;
    nome: string;
    usuarios: string[];
}

export const sample: Equipe[]=[
    {id: '1', nome: 'Suporte' , usuarios: []},
    {id: '2', nome: 'Desenvolvimento', usuarios: ["user_2axAJ9MJR8Aw3y0paRVkO62IbDq"]},
    {id: '3', nome: 'Infraestrutura', usuarios: []},
    {id: '4', nome: 'Teste', usuarios: ["user_2axAJ9MJR8Aw3y0paRVkO62IbDq"]},
]