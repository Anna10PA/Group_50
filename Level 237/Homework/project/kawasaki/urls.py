from django.urls import path
from .views import kawasaki

urlpatterns = [
    path('', kawasaki, name='kawasaki'),
]