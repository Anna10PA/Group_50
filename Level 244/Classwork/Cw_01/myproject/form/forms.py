from django import forms

class registration(forms.Form):
    name = forms.CharField(max_length=20, widget=forms.TextInput(attrs={
        'placeholder': 'Enter your name:\ ',
        'class': 'flex items-center gap-[10px] rounded-[10px] px-4'
    }))
    surname = forms.CharField(max_length=50, widget=forms.TextInput(attrs={
        'placeholder': 'Enter your surname ',
        'class': 'flex items-center gap-[10px] rounded-[10px] px-4'
    }))
    age = forms.IntegerField(help_text='Age', widget=forms.TextInput(attrs={
        'placeholder': 'Enter your Age: ',
        'class': 'flex items-center gap-[10px] rounded-[10px] px-4'
    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'placeholder': 'Enter your Email: ',
        'class': 'flex items-center gap-[10px] rounded-[10px] px-4'
    }))

