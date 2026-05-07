from django.shortcuts import render
from .forms import registration


def test(req):
    return render(req, 'index.html', {
        'form': registration()
    })