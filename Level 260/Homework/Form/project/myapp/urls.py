from django.urls import path
from .views import main, reg, log, user_page, logout

urlpatterns = [
    path('', main, name='main'),
    path('registration/', reg, name='registratin'),
    path('login/', log, name='login'),
    path('user/', user_page, name='user_page'),
    path('logout/', logout, name='logout')
]
