from django.db import models

class Products(models.Model):
    product_name = models.CharField(max_length=50)
    product_price = models.IntegerField()
    product_image = models.ImageField(upload_to='', null=True, blank=True)