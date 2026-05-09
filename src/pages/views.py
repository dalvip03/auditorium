from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "index.html")


def landing(request):
    return render(request, "landing.html")


def role_select(request):
    return render(request, "role-select.html")


def register_admin(request):
    return render(request, "register-admin.html")
