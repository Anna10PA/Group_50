from django.db import models

class ProductsModel(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.ImageField(upload_to='images', blank=True, null=True)

    def __str__(self):
        return self.name