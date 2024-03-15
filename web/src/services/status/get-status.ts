export const statusMapper = [
    {
        id: 'a0c63b66-334f-4843-a8ae-6ba073125e01',
        name: 'Pendente'
    },
    {
        id: "ebd461e1-b0eb-4ea0-8e41-0edb5f5884d5",
        name: 'Em Andamento'
    },
    {
        id: '5418fbd8-cfbd-411f-8467-4cf5a1632722',
        name: 'Finalizado'
    }
]

export const getStatusName = (id: string) => {
    const status = statusMapper.find((status) => status.id === id)
    return status?.name
}

