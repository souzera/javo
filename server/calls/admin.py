from django.contrib import admin

from .models import Status, Prioridade, Call, Equipe, Usuario

# Register your models here.

admin.site.register(Status)
admin.site.register(Prioridade)
admin.site.register(Equipe)
admin.site.register(Call)
admin.site.register(Usuario)