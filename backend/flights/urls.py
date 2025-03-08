from django.urls import path
from .views import flight_create_view, flight_list_view

urlpatterns = [
    path('create/', flight_create_view, name='flight_create'),
    path('flights/', flight_list_view, name='flight_list'),
]
