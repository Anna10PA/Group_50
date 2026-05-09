from django.db import models

class registration(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=50)
    age = models.IntegerField()
    password = models.CharField()

