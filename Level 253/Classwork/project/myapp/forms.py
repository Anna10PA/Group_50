from django.core.validators import MinLengthValidator
from django import forms

class regForm(forms.Form):
    name = forms.CharField(validators=[MinLengthValidator(5)])
    surname = forms.CharField(validators=[MinLengthValidator(5)])
    email = forms.CharField(validators=[MinLengthValidator(5)])
    password = forms.CharField(validators=[MinLengthValidator(8)])

    def clean_name(self):
        name = self.cleaned_data.get('name')
        for i in name:
            if i.lower() not in 'qwertyuiopasdfghjklzxcvbnm ':
                raise forms.ValidationError('must be alpabet')
        return name
        

    def clean_surname(self):
        surname = self.cleaned_data.get('surname')
        for i in surname:
            if i.lower() not in 'qwertyuiopasdfghjklzxcvbnm ':
                raise forms.ValidationError('must be alpabet')
        return surname

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if not email.endswith('@gmail.com'):
            raise forms.ValidationError('must end with @gmail.com')
        return email
    