from ninja import Router
from ninja_extra import api_controller, route
from django.shortcuts import get_object_or_404
from ninja_jwt.controller import TokenObtainPairController
from .models import *
from .schemas import EquipeSchema
from .schemas import UsuarioSchema, CallSchema
from .utils import getData

@api_controller('token', tags=['Auth'])
class AuthRouter(TokenObtainPairController):
    """obtain_token and refresh_token only"""
    
@api_controller('/usuarios', tags=['Usuarios'])
class UsuarioRouter:

    @route.get('/', response=list[UsuarioSchema])
    def listar_usuarios(self, request, **kwargs):
        users = Usuario.objects.all()
        return list(users)

    @route.get('/{id_profile}', response=UsuarioSchema)
    def get(self, request, id_profile, **kwargs):
        usuario = get_object_or_404(Usuario, id_profile=id_profile)
        return usuario
    
    @route.get('/profile/{user}', response=UsuarioSchema)
    def get_by_user(self, request, user, **kwargs):
        usuario = get_object_or_404(Usuario, user__username=user)
        return usuario

    @route.get('/{id_profile}/equipes', response=list[EquipeSchema])
    def listar_equipes(self, request, id_profile, **kwargs):
        equipes = Equipe.objects.filter(integrantes__id_profile=id_profile)
        return list(equipes)


@api_controller('/equipes', tags=['Equipes'])
class EquipeRouter:

    @route.get('/', response=list[EquipeSchema])
    def listar_equipes(self, request, **kwargs):
        equipes = Equipe.objects.all()
        return list(equipes)

    @route.get('/{equipe_id}/calls', response=list[CallSchema])
    def get_calls(self, request, equipe_id, **kwargs):
        calls = Call.objects.filter(equipe__id_equipe=equipe_id)
        return list(calls)

    @route.get('/{id_equipe}/users', response=list[UsuarioSchema])
    def listar_integrantes(self, request, id_equipe, **kwargs):
        users = Usuario.objects.filter(equipe__id_equipe=id_equipe)
        return list(users)


@api_controller('/calls', tags=['Calls'])
class CallRouter:

    @route.get('/{id_call}', response=CallSchema)
    def get(self, request, id_call, **kwargs):
        call = get_object_or_404(Call, id_call=id_call)
        return call

    @route.get("/", response=list[CallSchema])
    def listar_calls(self, request, **kwargs):
        calls = Call.objects.all()
        return list(calls)

    @route.post("/", response=CallSchema)
    def create_call(self, request, **kwargs):
        data = getData(request.body)
        '''
        {
            'titulo': 'Fazer playlist TekuDriver', 
            'status': 'a0c63b66-334f-4843-a8ae-6ba073125e01', 
            'desc': 'shirakao takamoto selection hits to driver', 
            'prioridade': '73e25b47-78c6-482a-babb-952fc8790c1b', 
            'id_equipe': 'f50553a3-6c2a-4a54-848b-177a82e9b170', 
            'criado_por': '4e572c01-1a6b-4883-a9a8-4cec2fc859a8', 
            'criado_para': 'c166c520-0f51-408e-9dd5-c34a7859dfdf'
        }
        '''
        status = Status.objects.get(id_status=data['status'])
        prioridade = Prioridade.objects.get(id_prioridade=data['prioridade'])
        equipe = Equipe.objects.get(id_equipe=data['id_equipe'])
        criado_por = Usuario.objects.get(id_profile=data['criado_por'])
        criado_para = Usuario.objects.get(id_profile=data['criado_para'])

        call = Call.objects.create(
            titulo=data['titulo'],
            status=status,
            desc=data['desc'],
            prioridade=prioridade,
            equipe=equipe,
            criado_por=criado_por,
            criado_para=criado_para
        )
        return call