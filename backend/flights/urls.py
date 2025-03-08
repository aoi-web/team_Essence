from django.urls import path
from .views import FlightListView  # Ensure you have a view defined

urlpatterns = [
    path("", FlightListView.as_view(), name="flight-list"),
]
