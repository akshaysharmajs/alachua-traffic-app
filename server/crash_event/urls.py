from django.urls import  re_path, include
from django.conf.urls.static import static
from traffic import settings
from rest_framework import routers
from .views import homepage, EventViewSet, VehicleViewSet, DriverViewSet

router = routers.DefaultRouter()
  
# define the router path and viewset to be used
router.register(r'event', EventViewSet, basename="event")
router.register(r'vehicle',VehicleViewSet, basename="vehicle")
router.register(r'driver',DriverViewSet, basename="driver")



app_name = 'traffic'

urlpatterns = [
    re_path('traffic/', homepage),
    re_path(r"^api/", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)