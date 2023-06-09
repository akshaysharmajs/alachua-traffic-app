# Generated by Django 4.1.3 on 2023-03-25 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("crash_event", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Event",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("REPORT_NUMBER", models.IntegerField()),
                ("CRASH_DATE", models.DateField()),
                ("CRASH_TIME", models.TimeField()),
                ("COUNTY", models.CharField(max_length=1000)),
                ("CITY", models.CharField(max_length=1000)),
                ("INVESTIGATING_AGENCY", models.CharField(max_length=1000)),
                ("ON_STREET", models.CharField(max_length=1000)),
                ("OFFSET_FEET", models.FloatField(null=True)),
                ("OFFSET_DIRECTION", models.CharField(max_length=1000, null=True)),
                (
                    "FROM_INTERSECTING_STREET",
                    models.CharField(max_length=1000, null=True),
                ),
                ("CRASH_SEVERITY", models.CharField(max_length=1000)),
                ("LATITUDE", models.DecimalField(decimal_places=6, max_digits=9)),
                ("LONGITUDE", models.DecimalField(decimal_places=6, max_digits=9)),
            ],
        ),
        migrations.DeleteModel(
            name="CrashEvent",
        ),
    ]
