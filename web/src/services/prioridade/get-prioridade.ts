const prioridadeMapper = [
    {
        id: '79d95d76-3674-4b6f-983b-af160f5e9b56',
        descricao: 'Baixa'
    },
    {
        id: "73e25b47-78c6-482a-babb-952fc8790c1b",
        descricao: 'Média'
    },
    {
        id: "074e15d4-9e8b-4b32-803f-b91609822e67",
        descricao: 'Alta'
    },
    {
        id: "f11d7681-e8ae-4793-b680-2710d4f4c42b",
        descricao: 'Urgente'
    }
]

export const getPrioridadeDescricao = (id: string) => {
    const prioridade = prioridadeMapper.find((prioridade) => prioridade.id === id)
    return prioridade?.descricao
}