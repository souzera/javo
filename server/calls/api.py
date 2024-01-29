from ninja import NinjaAPI
from .models import Call
from django.http import JsonResponse

api = NinjaAPI()

@api.get("calls/")
def listar_calls(request):
    calls = Call.objects.all()
    response = [call.get_data_dict() for call in calls]
    return JsonResponse(response, safe=False)