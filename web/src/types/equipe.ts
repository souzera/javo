import { Usuario } from "./usuario";

export interface Equipe{
    id_equipe: string;
    nome: string;
    desc: string;
    icon_url?: string;
    integrantes?: Usuario[]
}


export const defaultEquipes: Equipe[] = []
