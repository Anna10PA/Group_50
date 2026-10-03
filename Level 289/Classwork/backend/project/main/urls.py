from django.conf import settings 
from django.conf.urls.static import static
from django.urls import path
from .views import home, delete_product


urlpatterns = [
    path('', home, name='home'),
    path('delete/<int:id>', delete_product, name='delete_product')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
