from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    highest_role = models.CharField(null=True, blank=True, max_length=50)

