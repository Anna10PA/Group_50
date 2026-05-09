from django import forms
from .models import form

class regForm(forms.ModelForm):
    class Meta:
        model = form
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