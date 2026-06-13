from django.urls import path
from .views import main, reg

urlpatterns = [
    path('', main, name='main'),
    path('registration/', reg, name='registratin')
]
