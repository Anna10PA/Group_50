from django import forms
from .models import regModel

class regForm(forms.ModelForm):
    class Meta:
        model = regModel
        fields = '__all__'
        widgets = {
            'email': forms.EmailInput(attrs={
                'class': 'rounded bg-gray-950 px-[15px] py-2 flex flex-col items-start gap-[10px] w-full border-gray-800',
                'placeholder': 'example@gmail.com'
            }),
            'username': forms.TextInput(attrs={
                'class': 'rounded bg-gray-950 px-[15px] py-2 flex flex-col items-start gap-[10px] w-full border-gray-800',
                'placeholder': 'user_2009'
            }),
            'password': forms.PasswordInput(attrs={
                'class': 'rounded bg-gray-950 px-[15px] py-2 flex flex-col items-start gap-[10px] w-full border-gray-800',
                'placeholder': 'example123'
            })
        }


class logForm(forms.Form):
    email_or_username = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'rounded bg-gray-950 px-[15px] py-2 w-full border-gray-800',
        'placeholder': 'Email or Username'
    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'rounded bg-gray-950 px-[15px] py-2 w-full border-gray-800',
        'placeholder': 'Password'
    }))