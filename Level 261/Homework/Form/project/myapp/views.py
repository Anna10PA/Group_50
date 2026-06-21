from django.shortcuts import render, redirect
from .forms import registration, login, Posts
from .models import Products

# Create your views here.
def main(req):
    return render(req, 'index.html')

def reg(req):
    context = {
        'form': registration()
    }

    if req.method == 'POST':
        form = registration(req.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            context['form'] = form
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
    if user:
        posts = Products.objects.all().values()
        print(posts)
        return render(req, 'user_page.html', {'user': user, 'posts': posts})
    return redirect('main')

def logout(req):
    req.session.flush()
    return redirect('main')

def user_profile(req, email):
    user = req.session.get('user')
    if not user:
        return redirect('main')
    pst = Products.objects.all().filter(user_id = user.get('id'))
    return render(req, 'profile.html', {
        'user': user,
        'pst': pst
        })

def add_post(req):
    user = req.session.get('user')
    if not user:
        return redirect('main')
    if req.method == 'POST':
        form = Posts(req.POST)

        if form.is_valid():
            item = form.save(commit=False)
            item.user_id = user.get('id')
            item.save()
            return redirect('user_page')
        
    return render(req, 'add_post.html', {
        'user': user, 
        'form': Posts()
    })