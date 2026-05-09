from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("landing/", views.landing, name="landing"),
    path("role-select/", views.role_select, name="role_select"),
    path("register-admin/", views.register_admin, name="register_admin"),
]
