from .models import registration
from django import forms

class Regist(forms.ModelForm):
    class Meta:
        model = registration
        fields = '__all__'