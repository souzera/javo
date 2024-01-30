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
    
    def get_data_dict(self):
        print(self.get_user())
        return {
            "id_profile": self.id_profile,
            "username": self.user.username,
            "url_avatar": self.url_avatar
        }

class Status(models.Model):
    id_status =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
    
    def get_data_dict(self):
        return {
            "id_status": self.id_status,
            "nome": self.nome
        }
    
    
class Prioridade(models.Model):
    id_prioridade =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
    
    def get_data_dict(self):
        return {
            "id_prioridade": self.id_prioridade,
            "nome": self.nome
        }
    
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
    
    def get_data_dict(self):
        return {
            "id_equipe": self.id_equipe,
            "nome": self.nome,
            "desc": self.desc,
            "icon_url": self.icon_url,
            "integrantes": self.get_integrantes(),
        }

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
    
    def get_data_dict(self):
        return {
            "id_call": self.id_call,
            "titulo": self.titulo,
            "status": self.status.nome,
            "desc": self.desc,
            "prioridade": self.prioridade.nome,
            "dt_criacao": self.dt_criacao,
            "created_by": self.created_por,
            "created_for": self.created_para,
        }
    
    

    
