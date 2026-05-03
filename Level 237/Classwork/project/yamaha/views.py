from django.shortcuts import render, loader
from django.http import HttpResponse

# Create your views here.
def yamaha(reqsuet):
    templates = loader.get_template('yamaha.html')
    return HttpResponse(templates.render())

def r1(request):
    templates = loader.get_template('R1.html')
    return HttpResponse(templates.render())
