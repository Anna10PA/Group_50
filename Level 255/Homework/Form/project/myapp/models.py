from django.db import models

class regForm(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    b_date = models.DateField()
    reg_date = models.DateTimeField(auto_now_add=True)  

    def __str__ (self):
        return f"{self.email}"