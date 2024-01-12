export interface Chamado{
    id: number;
    id_equipe: number;
    titulo: string;
    descricao?: string;
    status: string;
    data: string;
    usuario: string;
    para?: string;
    prioridade: string;
}

export const sample: Chamado[]=[
    {id: 1, id_equipe: 1, titulo: 'Problema com o mouse', descricao: 'O mouse não está funcionando', status: 'Aberto', data: '2021-08-01', usuario: 'João', prioridade: 'Alta'},
    {id: 2, id_equipe: 1, titulo: 'Problema com o teclado', descricao: 'O teclado não está funcionando', status: 'Aberto', data: '2021-08-01', usuario: 'Maria', prioridade: 'Alta'},
    {id: 3, id_equipe: 2, titulo: 'erro na importação da base', descricao: 'Erro ao tentar importar base de dados', status: 'Aberto', data: '2021-08-01', usuario: 'Matheus', prioridade: 'Alta'},
    {id: 4, id_equipe: 2, titulo: 'Problema com o mouse', descricao: 'O mouse não está funcionando', status: 'Aberto', data: '2021-08-01', usuario: 'Junior', prioridade: 'Alta'},
]