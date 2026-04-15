from django.shortcuts import render

def main(request):
    return render(request, 'index.html')
    
def home(request):
    return render(request, 'home.html')

