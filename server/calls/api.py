from ninja_extra import NinjaExtraAPI
from .router import UsuarioRouter, EquipeRouter, CallRouter, AuthRouter
from ninja_jwt.controller import NinjaJWTDefaultController

api = NinjaExtraAPI(csrf=False)
api.register_controllers(NinjaJWTDefaultController)
api.register_controllers(
    UsuarioRouter, EquipeRouter, CallRouter, AuthRouter
)
