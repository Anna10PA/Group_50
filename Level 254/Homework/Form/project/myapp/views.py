from django.shortcuts import render
from .forms import registration

# Create your views here.
def main(req):
    context = {
        'form': registration()
    }

    if req.method == 'POST':
        forms = registration(req.POST)
        if forms.is_valid():
            forms.save()
        else:
            context['form'] = forms
            return render(req, 'index.html', context)
    return render(req, 'index.html', context)
