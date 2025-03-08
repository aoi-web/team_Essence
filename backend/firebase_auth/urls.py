from django.urls import path
from .views import verify_firebase_token

urlpatterns = [
    path("verify-token/", verify_firebase_token, name="verify_token"),
]
