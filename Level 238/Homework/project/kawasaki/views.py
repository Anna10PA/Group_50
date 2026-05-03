from django.shortcuts import render, loader
from django.http import HttpResponse

# Create your views here.
def kawasaki(reqsuet):
    templates = loader.get_template('kawasaki.html')
    return HttpResponse(templates.render())