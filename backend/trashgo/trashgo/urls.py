from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('api/', include('base.urls')),
    path('admin/', admin.site.urls),
] + static(settings.__getattr__('MEDIA_URL'), document_root=settings.__getattr__("MEDIA_ROOT"))
