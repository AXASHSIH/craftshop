from django.contrib import admin
from django.urls import path, include
from django.conf import settings #Use settings to serve media files during development
from django.conf.urls.static import static #Use static to serve media files during development

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("userapp.urls")),
    
 ]
   
    

# Serving media files during development
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

