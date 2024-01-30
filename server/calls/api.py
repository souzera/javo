from ninja import NinjaAPI
from .models import Usuario, Call, Equipe
from django.http import JsonResponse

api = NinjaAPI()


#User

@api.get("users/")
def listar_users(request):
    users = Usuario.objects.all()
    response = [user.get_data_dict() for user in users]
    return JsonResponse(response, safe=False)

#Calls

@api.get("calls/")
def listar_calls(request):
    calls = Call.objects.all()
    response = [call.get_data_dict() for call in calls]
    return JsonResponse(response, safe=False)

@api.get("calls/{id_call}")
def get_call(request, id_call):
    call = Call.objects.get(id_call=id_call)
    response = call.get_data_dict()
    return JsonResponse(response, safe=False)

@api.get('calls/{equipe_id}')
def get_calls_by_equipe(request, equipe_id):
    calls = Call.objects.filter(equipe__id_equipe=equipe_id)
    response = [call.get_data_dict() for call in calls]
    return JsonResponse(response, safe=False)


# Equipes

@api.get("equipes/")
def listar_equipes(request):
    equipes = Equipe.objects.all()
    response = [equipe.get_data_dict() for equipe in equipes]
    print(response)
    return JsonResponse(response, safe=False)