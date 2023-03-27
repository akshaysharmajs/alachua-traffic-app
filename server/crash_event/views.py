from django.http import HttpResponse
from .serializers import EventSerializer, VehicleSerializer, DriverSerializer
from .models import Event, Vehicle, Driver
from rest_framework import viewsets
from .utils import load_crash, load_driver, load_vehicle

# Create your views here.
def homepage(request):
    
    return HttpResponse('HomePage')

class EventViewSet(viewsets.ModelViewSet):
    if len(Event.objects.all()) == 0:
        load_crash()

    # define queryset
    queryset = Event.objects.all()
      
    # specify serializer to be used
    serializer_class = EventSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    if len(Vehicle.objects.all()) == 0:
        load_vehicle()

    # define queryset
    queryset = Vehicle.objects.all()
      
    # specify serializer to be used
    serializer_class = VehicleSerializer

class DriverViewSet(viewsets.ModelViewSet):
    if len(Driver.objects.all()) == 0:
        load_driver()
    # define queryset
    queryset = Driver.objects.all()
      
    # specify serializer to be used
    serializer_class = DriverSerializer