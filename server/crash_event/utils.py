import pandas as pd
import datetime

from .models import Event, Vehicle, Driver

def load_crash():           
    exceldata = pd.read_excel('/Users/akshaysharma/Desktop/untitled folder/alachua-traffic-app/server/media/CrashDatabase.xlsx')        
    dbframe = exceldata
    dbframe = dbframe.fillna('')
    for dbframe in dbframe.itertuples(): 
        object = Event(REPORT_NUMBER = dbframe._1,
            CRASH_DATE = datetime.datetime.strptime(dbframe._2, '%m/%d/%Y').strftime('%Y-%m-%d'),
            CRASH_TIME = dbframe._3[:5],
            COUNTY = dbframe.County,
            CITY = dbframe.City,
            INVESTIGATING_AGENCY = dbframe._6,
            ON_STREET = dbframe._7 if dbframe._7 != '' else None,
            OFFSET_FEET = dbframe._8 if dbframe._8 != '' else None,
            OFFSET_DIRECTION = dbframe._9,
            FROM_INTERSECTING_STREET = dbframe._10,
            CRASH_SEVERITY = dbframe._11,
            LATITUDE = dbframe.Latitude,
            LONGITUDE = dbframe.Longitude)           
        object.save()

    print("Successfully Loaded Crash Events!!")


def load_vehicle():
    exceldata = pd.read_excel('/Users/akshaysharma/Desktop/untitled folder/alachua-traffic-app/server/media/Vehicle.xlsx')        
    dbframe = exceldata
    dbframe = dbframe.fillna('')
    for dbframe in dbframe.itertuples(): 

        object = Vehicle(REPORT_NUMBER = dbframe._1,
                        VEHICLE_NUMBER = dbframe._2,
                        YEAR = dbframe.Year,
                        MAKE = dbframe.Make,
                        MODEL = dbframe.Model,
                        COLOR = dbframe.Color,
                        TRAVELING_ON_STREET = dbframe._7,
                        TRAVELING_DIRECTION = dbframe._8,
                        MANEUVER = dbframe.Maneuver)        
        object.save()

    print("Successfully Loaded Vehicles!!")

def load_driver():
    exceldata = pd.read_excel('/Users/akshaysharma/Desktop/untitled folder/alachua-traffic-app/server/media/Driver.xlsx')        
    dbframe = exceldata
    dbframe = dbframe.fillna('')
    for dbframe in dbframe.itertuples(): 
        object = Driver(REPORT_NUMBER = dbframe._1,
                        VEHICLE_NUMBER = dbframe._2,
                        PERSON_NUMBER = dbframe._3,
                        INJURY_SEVERITY = dbframe._4,
                        SEX = dbframe.Sex,
                        AGE = dbframe.Age,
                        RESTRAINT_SYSTEMS = dbframe._7)        
        object.save()

    print("Successfully Loaded Drivers!!")