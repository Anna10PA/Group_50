from django import forms
from .models import Users, Products
from datetime import date

style = 'border text-black px-5 py-2 rounded border-gray-500 focus:outline-[#0101BD] w-full bg-transparent'

class registration(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['name', 'surname', 'email', 'password', 'b_date']
        labels = {
            'name': '',
            'surname': '',
            'email': '',
            'password': '',
            'b_date': '',
            'reg_date': ''
        }
        widgets = {
            'name': forms.TextInput(attrs={
                'class': f'{style}',
                'placeholder': 'Name'
            }),
            'surname': forms.TextInput(attrs={
                'class': f'{style}',
                'placeholder': 'Surname'
            }),
            'email': forms.EmailInput(attrs={
                'class': f'{style}',
                'placeholder': 'Email'
            }),
            'password': forms.PasswordInput(attrs={
                'class': f'{style}',
                'placeholder': 'Password'
            }),
            'b_date': forms.DateInput(attrs={
                'class': f'{style}',
                'type': 'date'
            }),
            'reg_date': forms.DateTimeInput(attrs={
                'class': f'{style}',
            })
        }
    
    # name
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if not name.isalpha():
            raise forms.ValidationError('Must contain only letters')
        elif not name[0].isupper():
            raise forms.ValidationError('Must start with a capital letter')
        return name.capitalize()
    
    # surname
    def clean_surname(self):
        surname = self.cleaned_data.get('surname')
        if not surname.isalpha():
           raise forms.ValidationError('Must contain only letters')

        elif not surname[0].isupper():
            raise forms.ValidationError('Must start with a capital letter')

        return surname.capitalize()
    
    # email
    def clean_email(self):
        email_endings = [
            "gmail.com",
            "outlook.com",
            "hotmail.com",
            "yahoo.com",
            "icloud.com",
            "proton.me",
            "protonmail.com",
            "aol.com",
            "mail.com",
            "gmx.com",
            "yandex.com",
            "zoho.com"
        ]
        email = self.cleaned_data.get('email')
        emails = Users.objects.filter(email=email).exists()

        if emails:
            raise forms.ValidationError('This email is already registered')
        if email.split('@')[1] not in email_endings:
            raise forms.ValidationError('Invalid email ending')
        return email

    # password
    def clean_password(self):
        password = self.cleaned_data.get('password')
        name = self.cleaned_data.get('name')
        surname = self.cleaned_data.get('surname')
        email = self.cleaned_data.get('email')
        rep_password = self.data.get('rep_password')

        count = 0
        for i in '0123456789':
            if i in password:
                count += 1

        if len(password) < 8:
            raise forms.ValidationError('Character count must be greater than 8')
        
        elif (password+'a').upper() == (password+'A') or (password+'a').lower() == (password+'a'):
            raise forms.ValidationError('Must contain both uppercase and lowercase letters')

        elif not any(i in password for i in '!@#$%^&*_'):
            raise forms.ValidationError('Password must contain a special character')
    
        elif str(email).split('@')[0] in password or str(name) in password or str(surname) in password:
            raise forms.ValidationError('Password must not contain name, surname or email')

        elif rep_password != password:
            raise forms.ValidationError('Passwords must match')
        
        elif not any(i.isdigit() for i in password):
            raise forms.ValidationError('Must contain a number')

        elif count < 3:
            raise forms.ValidationError('Must contain at least 3 numbers') 
        
        return password

    # b-day
    def clean_b_date(self):
        b_date = self.cleaned_data.get('b_date')
        if 10 < (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) < 17:
            raise forms.ValidationError('You are a kid !')

        elif (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) <= 10:
            raise forms.ValidationError('You must be 17+')
        
        elif (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) < 0:
            raise forms.ValidationError('Invalid date')

        return b_date

class login(forms.Form):
    email = forms.EmailField(
        label="",
        widget=forms.EmailInput(attrs={
            'class': style,
            'placeholder': 'Email'
        })
    )
    
    password = forms.CharField(
        label="",
        widget=forms.PasswordInput(attrs={
            'class': style,
            'placeholder': 'Password'
        })
    )

    def clean(self):
        email = self.cleaned_data.get('email')
        password = self.cleaned_data.get('password')

        if email and password:
            find_user = list(filter(lambda u: u['email'] == email and u['password'] == password, list(Users.objects.all().values())))
            
            if not find_user:
                raise forms.ValidationError('Email or password is not correct')

        user = find_user[0]

        if 'b_date' in user and user.get('b_date'):
            user['b_date'] = str(user['b_date']) 

        if 'reg_date' in user and user.get('reg_date'):
            user['reg_date'] = str(user['reg_date'])

        self.cleaned_data['user'] = user
        return self.cleaned_data

class Posts(forms.ModelForm):
    class Meta:
        model = Products
        fields = ['desc', 'post']
        labels = {
            "desc": '',
            "post": ''
        }
        widgets = {
            'desc': forms.TextInput(attrs={
                'class': f'{style}',
                'placeholder': 'Desc'
            }),
            "post": forms.FileInput(attrs={
                'class': f'{style} w-full h-full'
            }),
        }