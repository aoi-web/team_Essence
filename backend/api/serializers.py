from rest_framework import serializers
from .models import Flight, EcoRoute

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'

class EcoRouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = EcoRoute
        fields = '__all__'
        