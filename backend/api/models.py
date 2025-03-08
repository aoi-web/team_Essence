from django.db import models

class Flight(models.Model):
    flight_number = models.CharField(max_length=10)
    airline = models.CharField(max_length=50)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    price = models.FloatField()
    co2_impact = models.FloatField()

    def __str__(self):
        return f"{self.flight_number} - {self.origin} to {self.destination}"

class EcoRoute(models.Model):
    route_name = models.CharField(max_length=100)
    transport_type = models.CharField(max_length=50, choices=[("Train", "Train"), ("Bus", "Bus")])
    co2_savings = models.FloatField()

    def __str__(self):
        return self.route_name


