from django.urls import path
from .views import postViews, del_text, edit_item

urlpatterns = [
    path('', postViews, name='postViews'),
    path('delete/<int:id>', del_text),
    path('edit/<int:id>/', edit_item, name='edit_item')
]

