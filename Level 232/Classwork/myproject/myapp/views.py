from django.shortcuts import render
from django.shortcuts import render
from myapp.models import Student

def main(request):
    students = Student.objects.all()
    return render(request, 'index.html', {'students': students})
