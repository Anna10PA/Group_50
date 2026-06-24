from django.db import models

class Users(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    b_date = models.DateField()
    reg_date = models.DateTimeField(auto_now_add=True)  
    profile = models.ImageField(upload_to='Profiles', default='https://i.pinimg.com/736x/27/5f/99/275f99923b080b18e7b474ed6155a17f.jpg')
    block = models.BooleanField(default=0)

    def __str__ (self):
        return f"{self.email}"

class Products(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    desc = models.CharField(max_length=1000)
    post = models.ImageField(upload_to='posts')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}"    