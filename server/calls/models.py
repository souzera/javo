from django.db import models
from uuid import uuid4

# Create your models here.

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
    

class Call(models.Model):
    id_call =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    titulo = models.CharField(max_length=256)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    desc = models.TextField(blank=True)
    prioridade = models.ForeignKey(Prioridade, on_delete=models.CASCADE)
    dt_criacao = models.DateTimeField(auto_now_add=True)
    #created_by = models.CharField(max_length=256) usuario
    #created_for = models.CharField(max_length=256, blank=True) #usuario
    
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
            #"created_by": self.created_by,
            #"created_for": self.created_for
        }
    
    
class Equipe(models.Model):
    id_equipe =  models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=256)
    desc = models.TextField(blank=True)
    icon_url = models.CharField(max_length=256, blank=True)
    calls = models.ManyToManyField(Call)
    #integrantes = models.CharField(max_length=256) usuarios
    
    def __str__(self):
        return self.nome
    
    
