from django import forms

class registration(forms.Form):
    name = forms.CharField(max_length=20)
    surname = forms.CharField(max_length=50)
    age = forms.IntegerField(help_text='Age')
    password = forms.CharField(widget=forms.PasswordInput())

