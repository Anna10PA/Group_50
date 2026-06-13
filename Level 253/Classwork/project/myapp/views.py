from django.shortcuts import render
from .forms import regForm

# Create your views here.
def main(req):
    context = {
            'form': regForm()
        }
    if req.method == 'POST':
        form = regForm(req.POST)

        if form.is_valid():
            print('work')
        else:
            context['error'] = form.errors
            print(form.errors)
            return render(req, 'index.html', context)

    return render(req, 'index.html', context)