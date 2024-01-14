export interface Usuario {
  id: string;
  apelido: string;
  id_equipe: number;
}

export const sample: Usuario[] = [
  { id: '1', apelido: 'João', id_equipe: 1 },
  { id: '2', apelido: 'Maria', id_equipe: 1 },
  { id: '3', apelido: 'Matheus', id_equipe: 2 },
  { id: '4', apelido: 'Junior', id_equipe: 2 },
  { id: '5', apelido: 'Ana', id_equipe: 2 },
  { id: '6', apelido: 'Maria', id_equipe: 2 },
  { id: '7', apelido: 'Rokusho', id_equipe: 3 },
]