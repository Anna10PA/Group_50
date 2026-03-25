from django.db import models

# Create your models here.
class mdl(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)

