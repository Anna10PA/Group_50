import json
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def products(request):
    path = 'app/products.json'
    try:
        with open(path, 'r', encoding='utf-8') as file:
            product_lst = json.load(file)
    except:
        product_lst = []

    return render(request, 'products.html', {'products': product_lst})


def contact_us(request):
    return render(request, 'contact_us.html')