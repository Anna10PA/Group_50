from django import forms
from .models import regForm
from datetime import date

style = 'border text-white px-5 py-2 rounded border-gray-500 focus:outline-green-500 w-full bg-transparent'

class registration(forms.ModelForm):
    class Meta:
        model = regForm
        fields = '__all__'
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
                'placeholder': 'სახელი'
            }),
            'surname': forms.TextInput(attrs={
                'class': f'{style}',
                'placeholder': 'გვარი'
            }),
            'email': forms.EmailInput(attrs={
                'class': f'{style}',
                'placeholder': 'მეილი'
            }),
            'password': forms.PasswordInput(attrs={
                'class': f'{style}',
                'placeholder': 'პაროლი'
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
            raise forms.ValidationError('აუცილებლად უნდა იყოს ასო')
        elif not name[0].isupper():
            raise forms.ValidationError('აუცილებლად უნდა იწყებოდეს დიდი ასოთი')
        return name.capitalize()
    
    # surname
    def clean_surname(self):
        surname = self.cleaned_data.get('surname')
        if not surname.isalpha():
           raise forms.ValidationError('აუცილებლად უნდა იყოს ასო')

        elif not surname[0].isupper():
            raise forms.ValidationError('აუცილებლად უნდა იწყებოდეს დიდი ასოთი')

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
        emails = regForm.objects.filter(email=email).exists()

        if emails:
            raise forms.ValidationError('ასეთი მეილი უკვე რეგისტრირებულია')
        if email.split('@')[1] not in email_endings:
            raise forms.ValidationError('არასწორია მეილის დაბოლოება')
        return email

    # password
    def clean_password(self):
        password = self.cleaned_data.get('password')
        name = self.cleaned_data.get('name')
        surname = self.cleaned_data.get('surname')
        email = self.cleaned_data.get('email')
        rep_password = self.data.get('rep_password')

        count = 0
        for i in '01234567890':
            if i in password:
                count += 1

        if len(password) < 8:
            raise forms.ValidationError('სიმბოლოების რაოდენობა უნდა იყოს მეტი რვაზე')
        
        elif (password+'a').upper() == (password+'A') or (password+'a').lower() == (password+'a'):
            raise forms.ValidationError('აუცილებლად უნდა შეიცავდეს დიდ და პატარა ასოებს')

        elif not any(i in password for i in '!@#$%^&*_'):
            raise forms.ValidationError('პაროლი უნდა შეიცავდეს სიმბოლოს')
    
        elif str(email).split('@')[0] in password or str(name) in password or str(surname) in password:
            raise forms.ValidationError('პაროლი არ უნდა შეიცავდეს სახელს, გვარს ან მეილს')

        elif rep_password != password:
            raise forms.ValidationError('პაროლები უნდა ემთხვეოდეს ერთმანეთს')
        
        elif not any(i.isdigit() for i in password):
            raise forms.ValidationError('უნდა შეიცავდეს რიცხვს')

        elif count < 3:
            raise forms.ValidationError('აუცილებლად უნდა შეიცავდეს მინიმუმ 3 რიცხვს') 
        
        return password
    
    def clean_b_date(self):
        b_date = self.cleaned_data.get('b_date')
        if 10 < (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) < 17:
            raise forms.ValidationError('ბავშვი ხარ !')

        elif (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) <= 10:
            raise forms.ValidationError('17+ უნდა იყო')
        
        elif (int(str(date.today()).split('-')[0]) - int(str(b_date).split('-')[0])) < 0:
            raise forms.ValidationError('არ არის სწორი თარიღი')

        return b_date