from django.contrib import admin
from django.urls import path,include 
from django.contrib.auth import views as auth

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Home.urls')),  
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
