from ninja import Schema, Field

class UsuarioSchema(Schema):
    id_profile: str
    username: str
    url_avatar: str
    
class StatusSchema(Schema):
    id_status: str
    nome: str
    
class PrioridadeSchema(Schema):
    id_prioridade: str
    nome: str
    
class EquipeSchema(Schema):
    id_equipe: str
    nome: str
    desc: str
    icon_url: str
    integrantes: list[UsuarioSchema]
    
class CallSchema(Schema):
    id_call: str
    titulo: str
    descricao: str
    status: StatusSchema
    prioridade: PrioridadeSchema
    equipe: EquipeSchema
    criador: UsuarioSchema
    responsavel: UsuarioSchema
    data_criacao: str
    data_modificacao: str
    data_limite: str
    data_conclusao: str
    url_anexo: str
    comentarios: list[str]
    tags: list[str]
    url_avatar: str
    url_avatar_responsavel: str
    url_avatar_criador: str
    url_avatar_equipe: str
    url_avatar_status: str
    url_avatar_prioridade: str
    url_avatar_comentarios: str
    url_avatar_tags: str
    url_avatar_anexo: str
    url_avatar_data_criacao: str
    url_avatar_data_modificacao: str
    url_avatar_data_limite: str
    url_avatar_data_conclusao
    