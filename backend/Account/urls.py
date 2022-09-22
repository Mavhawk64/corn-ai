from django.contrib import admin
from django.urls import path, include 
from django.contrib.auth import views as auth
from . import views

urlpatterns = [
    
	path('login/', views.login, name ='login'),
	path('logout/', auth.LogoutView.as_view(template_name ='user/index.html'), name ='logout'),
	path('register/', views.register, name ='register'),

]
