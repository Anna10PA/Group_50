from django.shortcuts import render
from .forms import Regist


def test(req):
    return render(req, 'index.html', {
        'form': Regist()
    })