from ninja_extra import NinjaExtraAPI
from .router import UsuarioRouter, EquipeRouter, CallRouter

api = NinjaExtraAPI(csrf=False)
api.register_controllers(
    UsuarioRouter, EquipeRouter, CallRouter
)
