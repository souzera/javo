
from .models import Usuario, Call, Equipe
from django.http import JsonResponse

api = NinjaAPI()

#User

@api.get("/users")
def listar_users(request):
    users = Usuario.objects.all()
    response = [user.get_data_dict() for user in users]
    return JsonResponse(response, safe=False)

#Calls

@api.get("/calls")
def listar_calls(request):
    calls = Call.objects.all()
    response = [call.get_data_dict() for call in calls]
    return JsonResponse(response, safe=False)

@api.get("/calls/{id_call}")
def get_call(request, id_call):
    call = Call.objects.get(id_call=id_call)
    response = call.get_data_dict()
    return JsonResponse(response, safe=False)

@api.get('/equipe/{equipe_id}/calls')
def get_calls_by_equipe(request, equipe_id):
    calls = Call.objects.filter(equipe__id_equipe=equipe_id)
    response = [call.get_data_dict() for call in calls]
    return JsonResponse(response, safe=False)


# Equipes

api.get("equipes/")
def listar_equipes(request):
    equipes = Equipe.objects.all()
    response = [equipe.get_data_dict() for equipe in equipes]
    return JsonResponse(response, safe=False)


#TODO: Refatorar o codigo abaixo para usar o filter ao inves do all na query de equipes
@api.get("/user/{id_profile}/equipes")
def listar_equipes_by_user(request, id_profile):
    user = Usuario.objects.get(id_profile=id_profile)
    equipes = Equipe.objects.all()
    response = []
    for equipe in equipes:
        if user in equipe.integrantes.all():
            response.append(equipe.get_data_dict())
    return JsonResponse(response, safe=False)