from django.urls import path
from .views import reg, login, main

urlpatterns = [
    path('', reg, name='form'),
    path('login/', login, name='login'),
    path('home/<str:name>/', main, name='main'),
]
