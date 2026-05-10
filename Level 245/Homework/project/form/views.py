from django.shortcuts import render
from .forms import regForm, logForm
from .models import regModel

def reg(req):
    if req.method == 'POST':
        forms = regForm(req.POST)
        users = regModel.objects.all().values() 
        # print(logForm())

        if forms.is_valid():
            for user in users:
                if user['email'] == req.POST['email'] or user['username'] == req.POST['username']:
                    return render(req, 'error_page.html', {'text': 'This user is already '})
            forms.save()
            return render(req, 'login.html', {'form': logForm()})
        else:
            return render(req, 'error_page.html', {'text': 'Not Found (404)'})
    return render(req, 'index.html', {'form': regForm()})


def login(req):
    if req.method == 'POST':
        forms = logForm(req.POST)
        users = regModel.objects.all().values()

        if forms.is_valid():
            for user in users:
                if (user['email'] == req.POST['email_or_username'] or user['username'] == req.POST['email_or_username']) and user['password'] == req.POST['password']:
                    return render(req, 'main.html', {'text': f'{user['username']}'})
            return render(req, 'error_page.html', {'text': 'email (username) or password is not correct'})
        return render(req, 'error_page.html', {'text': 'Not Work'})
    return render(req, 'login.html', {'form': logForm()})

def main(req, name):
    return render(req, 'main.html')