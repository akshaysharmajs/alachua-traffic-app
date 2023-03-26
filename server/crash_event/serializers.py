from rest_framework import serializers
  
# import model from models.py
from .models import Event, Vehicle, Driver
  
# Create a model serializer 
class EventSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = Event
        fields = ( 
                    "REPORT_NUMBER",
                    "CRASH_DATE",
                    "CRASH_TIME",
                    "COUNTY",
                    "CITY",
                    "INVESTIGATING_AGENCY",
                    "ON_STREET",
                    "OFFSET_FEET",
                    "OFFSET_DIRECTION",
                    "FROM_INTERSECTING_STREET",
                    "CRASH_SEVERITY",
                    "LATITUDE",
                    "LONGITUDE",
                )


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = (
                "REPORT_NUMBER",
                "VEHICLE_NUMBER",
                "YEAR",
                "MAKE",
                "MODEL",
                "COLOR",
                "TRAVELING_ON_STREET",
                "TRAVELING_DIRECTION",
                "MANEUVER"
        )

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = (
                "REPORT_NUMBER",
                "VEHICLE_NUMBER",
                "PERSON_NUMBER",
                "INJURY_SEVERITY",
                "SEX",
                "AGE",
                "RESTRAINT_SYSTEMS"
        )