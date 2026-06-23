from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import registration, login, Posts
from .models import Products, Users
import uuid 

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
        
        lst = []
        for post in list(posts):
            if post.get('user_id'):
                lst.append({
                    "post": post,
                    "user": Users.objects.get(id=int(post.get('user_id')))
                })
        return render(req, 'user_page.html', {'user': user, 'posts': lst})
    return redirect('main')

def logout(req):
    req.session.flush()
    return redirect('main')

def user_profile(req, email):
    user = req.session.get('user')
    if not user:
        return redirect('main')
    return render(req, 'profile.html', {
        'user': user
        })

def add_post(req):
    user = req.session.get('user')
    if not user:
        return redirect('main')

    if req.method == 'POST':
        form = Posts(req.POST, req.FILES)

        if form.is_valid():
            item = form.save(commit=False)
            item.user_id = user.get('id')
            item.save()
            return redirect('user_page')
        
    return render(req, 'add_post.html', {
        'user': user, 
        'form': Posts()
    })

def edit_profile_pic(req):
    user = req.session.get('user')

    if not user:
        return redirect('main')
    
    if req.method == 'POST':
        update_pic = req.FILES.get('file')
        
        if update_pic:
            user_id = user.get('id')
            profile = Users.objects.get(id=user_id)
            profile.profile = update_pic 
            profile.save()             
            
            user['profile'] = profile.profile.url  
            req.session['user'] = user

            return redirect('edit_profile_pic')  

    return render(req, 'edit_profile_pic.html', {'user': user})

def code(req):
    user = req.session.get('user')
    code = req.session.get('code')

    count = 0
    if user and code:
        if req.method == 'POST':
            user_code = req.POST.get('code')
            if user_code == str(code):
                redirect('user_page')
            else:
                count += 1
                if count >= 3:
                    return redirect('main')
            return render(req, 'code.html')
        return render(req, 'code.html')
    return render(req, 'code.html')

def update_email(req):
    user = req.session.get('user')
    
    if user:
        if req.method == 'POST': 
            email = req.POST.get('email')

            if email == str(user.get('email')):
                code = str(uuid.uuid4()).split('-')[-1]
                req.session['code'] = code
                send_mail('FiftyGroup.co', f"Hello {user.get('name')}! code: {code}", settings.EMAIL_HOST_USER, [email])
                return redirect('code')
            
            return redirect('edit_profile_pic')
        
        return redirect('edit_profile_pic')
    
    return redirect('main') 

