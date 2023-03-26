from django.contrib.auth.models import AbstractUser, models



class User(AbstractUser):
    pass

class Event(models.Model):
    REPORT_NUMBER = models.IntegerField()
    CRASH_DATE = models.DateField()
    CRASH_TIME = models.TimeField()
    COUNTY = models.CharField(max_length=100)
    CITY = models.CharField(max_length=100)
    INVESTIGATING_AGENCY = models.CharField(max_length=100)
    ON_STREET = models.CharField(max_length=1000)
    OFFSET_FEET = models.FloatField(null=True)
    OFFSET_DIRECTION = models.CharField(max_length=100, null=True)
    FROM_INTERSECTING_STREET = models.CharField(max_length=1000, null=True)
    CRASH_SEVERITY = models.CharField(max_length=100)
    LATITUDE = models.DecimalField(max_digits=9, decimal_places=6)
    LONGITUDE = models.DecimalField(max_digits=9, decimal_places=6)

    def __str__(self):
        return str(self.REPORT_NUMBER)


class Vehicle(models.Model):
    REPORT_NUMBER = models.IntegerField()
    VEHICLE_NUMBER = models.IntegerField()
    YEAR = models.IntegerField()
    MAKE = models.CharField(max_length=100)
    MODEL = models.CharField(max_length=100)
    COLOR = models.CharField(max_length=100)
    TRAVELING_ON_STREET = models.CharField(max_length=1000)
    TRAVELING_DIRECTION = models.CharField(max_length=1000)
    MANEUVER = models.CharField(max_length=100)

    def __str__(self) -> str:
        return str(self.VEHICLE_NUMBER)

class Driver(models.Model):
    REPORT_NUMBER = models.IntegerField()
    VEHICLE_NUMBER = models.IntegerField()
    PERSON_NUMBER = models.IntegerField()
    INJURY_SEVERITY = models.CharField(max_length=100)
    SEX = models.CharField(max_length=1)
    AGE = models.IntegerField()
    RESTRAINT_SYSTEMS = models.CharField(max_length=100)

    def __str__(self) -> str:
        return str(self.PERSON_NUMBER)