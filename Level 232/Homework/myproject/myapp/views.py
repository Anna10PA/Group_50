from django.shortcuts import render, get_object_or_404
from .models import Products

def main(request):
    product = Products.objects.all()
    return render(request, 'main.html', {'products': product})

def product_detail(request, id):
    product = get_object_or_404(Products, id=id)
    return render(request, 'product_detail.html', {'product': product})