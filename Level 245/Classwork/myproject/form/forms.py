from .models import registration
from django import forms

class Regist(forms.ModelForm):
    class Meta:
        model = registration
        fields = '__all__'
        labels = {
            'name': 'Your Name'
        }

        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Enter Your name',
                'class': 'bg-gray-950 rounded text-white'
            }),
            'surname': forms.TextInput(attrs={
                'placeholder': 'Enter your surname',
                'class': 'bg-gray-950 rounded text-white'
            }),
            'age': forms.NumberInput(attrs={
                'class': 'bg-gray-950 rounded text-white',
                'placeholder': 'Enter your age'
            }),
            'password': forms.TextInput(attrs={
                'class':'bg-gray-950 rounded text-white',
                'placeholder': 'Enter your password'
            })
        }
       