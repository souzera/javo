from ninja import ModelSchema, Field
from .models import Usuario, Call, Equipe, Status, Prioridade

class UsuarioSchema(ModelSchema):
    
    user: str = Field(None, alias='user.username')
    class Meta:
        model = Usuario
        fields = "__all__"
        fields_optional = ['url_avatar']
    
    
class StatusSchema(ModelSchema):
    
    class Meta:
        model = Status
        fields = "__all__"
    
class PrioridadeSchema(ModelSchema):
    
    class Meta:
        model = Prioridade
        fields = "__all__"
    
class EquipeSchema(ModelSchema):
    integrantes: list[UsuarioSchema]
    
    class Meta:
        model = Equipe
        fields = "__all__"
        fiels_optional = ['desc','icon_url']
    
class CallSchema(ModelSchema):
    
    class Meta:
        model = Call
        fields = "__all__"
        fields_optional = ['desc','criado_para']
 
    
    