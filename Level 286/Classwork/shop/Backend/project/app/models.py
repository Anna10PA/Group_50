from django.db import models

class PostModels(models.Model):
    text = models.CharField(max_length=50)