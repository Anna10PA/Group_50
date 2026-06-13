from django.shortcuts import render, redirect
from .forms import registration, login

# Create your views here.
def main(req):
    return render(req, 'index.html')

def reg(req):
    context = {
        'form': registration()
    }

    if req.method == 'POST':
        forms = registration(req.POST)
        if forms.is_valid():
            forms.save()
            return redirect('login')
        else:
            context['form'] = forms
            return render(req, 'registration.html', context)
    return render(req, 'registration.html', context)

def log(req):
    if req.method == 'POST':
        form = login(req.POST)
        if form.is_valid():
            user = form.cleaned_data.get('user')
            req.session['user'] = user
            return redirect('user_page') 
    else:
        form = login()
    return render(req, 'login.html', {'form': form})

def user_page(req):
    user = req.session.get('user')
    return render(req, 'user_page.html', {'name': user['name']})

def logout(req):
    req.session.flush()
    return redirect('main')