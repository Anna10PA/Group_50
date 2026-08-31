from django.urls import path
from .views import main, reg, log, user_page, logout, user_profile, add_post, edit_profile_pic, code, send_email, update_info
from django.conf import settings 
from django.conf.urls.static import static  

urlpatterns = [
    path('', main, name='main'),
    path('registration/', reg, name='registratin'),
    path('login/', log, name='login'),
    path('home/', user_page, name='user_page'),
    path('logout/', logout, name='logout'),
    path('home/<str:email>/', user_profile, name='profile'),
    path('home/add_post', add_post, name='add_post'),
    path('home/profile', edit_profile_pic, name='edit_profile_pic'),
    path('home/update_email', send_email, name='update_email'),
    path('home/code', code, name='code'),
    path('home/update', update_info, name='update_info')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)