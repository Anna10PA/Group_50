from django.shortcuts import render, loader
from django.http import HttpResponse

# Create your views here.
def main(reqsuet):
    templates = loader.get_template('index.html')
    return HttpResponse(templates.render())