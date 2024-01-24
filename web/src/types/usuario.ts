import { Equipe } from "./equipe";

export interface Usuario {
  id: string;
  apelido: string;
  equipes: Equipe[];
}

export const sampleUsers: Usuario[] = [
  { id: '1', apelido: 'João', equipes:[]},
  { id: '2', apelido: 'Maria', equipes:[]},
  { id: '3', apelido: 'Matheus', equipes:[] },
  { id: '4', apelido: 'Junior', equipes:[]},
  { id: '5', apelido: 'Ana', equipes:[] },
  { id: '6', apelido: 'Maria', equipes:[] },
  { id: 'user_2axAJ9MJR8Aw3y0paRVkO62IbDq', apelido: 'Rokusho', equipes:[]},
]