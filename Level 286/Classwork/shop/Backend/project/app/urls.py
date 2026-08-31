from django.urls import path
from .views import postViews, del_text

urlpatterns = [
    path('', postViews, name='postViews'),
    path('delete/<int:id>', del_text)
]

