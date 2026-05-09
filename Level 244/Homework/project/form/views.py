from django.shortcuts import render
from .forms import regForm

def form(req):
    return render(req, 'index.html', {'form': regForm()})