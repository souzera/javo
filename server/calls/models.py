from django.contrib.auth.models import User
from django.db import models
from uuid import uuid4

# Create your models here.

class Usuario(models.Model):
    id_profile =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.OneToOneField(User, related_name='usuario', on_delete=models.CASCADE)
    url_avatar = models.CharField(max_length=256, blank=True)
    
    def __str__(self):
        return self.user.username
    
    def get_user(self):
        return self.user
    

class Status(models.Model):
    id_status =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
    
    
class Prioridade(models.Model):
    id_prioridade =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
    
    
class Equipe(models.Model):
    id_equipe =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=256)
    desc = models.TextField(blank=True)
    icon_url = models.CharField(max_length=256, blank=True)
    integrantes = models.ManyToManyField(Usuario)
    
    def __str__(self):
        return self.nome
    
    def get_integrantes(self):
        return [usuario.get_data_dict() for usuario in self.integrantes.all()]

class Call(models.Model):
    id_call =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    titulo = models.CharField(max_length=256)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    desc = models.TextField(blank=True)
    prioridade = models.ForeignKey(Prioridade, on_delete=models.CASCADE)
    dt_criacao = models.DateTimeField(auto_now_add=True)
    equipe = models.ForeignKey(Equipe, on_delete=models.CASCADE)
    criado_por = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='criado_por', blank=True, null=True)
    criado_para = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='criado_para', blank=True, null=True)
    
    def __str__(self):
        return self.titulo
    

    
