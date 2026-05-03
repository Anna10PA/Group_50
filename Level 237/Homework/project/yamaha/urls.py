from django.urls import path
from .views import yamaha, r1

urlpatterns = [
    path('', yamaha, name='yamaha'),
    path('r1', r1, name='r1'),
]