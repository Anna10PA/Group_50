from django.db import models

class Student(models.Model): 
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)

