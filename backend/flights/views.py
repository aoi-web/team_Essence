from django.http import JsonResponse
from django.views import View
from .models import Flight

class FlightListView(View):
    def get(self, request):
        flights = list(Flight.objects.values())  # Convert QuerySet to list
        return JsonResponse(flights, safe=False)
