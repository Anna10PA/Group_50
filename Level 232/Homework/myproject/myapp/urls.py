from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('', views.main, name='main'),
    path('<int:id>/', views.product_detail, name='product_detail')
]
