from django.contrib import admin
from django.urls import include, re_path 
from django.contrib.auth import views as auth

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path('', include('Home.urls')),  
    re_path('API/', include('API.urls')),  
    #re_path('rest-auth/', include('rest_auth.urls')),
    # re_path('rest-auth/registration/', include('rest_auth.registration.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
