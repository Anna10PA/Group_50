from django.shortcuts import render
from .forms import regForm

# Create your views here.
def main(req):
    return render(req, 'index.html', {'form': regForm()})