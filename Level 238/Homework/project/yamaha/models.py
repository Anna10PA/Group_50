from django.db import models

class yamaha(models.Model):
    model = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    top_speed = models.CharField(max_length=100)
    engine_capacity = models.CharField(max_length=100)
    production_years = models.CharField(max_length=100)
    Transmission = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)


    def __str__(self):
        return self.model
