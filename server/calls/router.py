from ninja import Router
from ninja_extra import api_controller, route
from .schemas import EquipeSchema
from .models import Equipe, Usuario, Call
from django.shortcuts import get_object_or_404
from .schemas import UsuarioSchema, CallSchema
from ninja_jwt.controller import TokenObtainPairController

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