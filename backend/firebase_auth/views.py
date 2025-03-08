from django.http import JsonResponse
from firebase_admin import auth
import json

def verify_firebase_token(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            token = data.get("token")

            decoded_token = auth.verify_id_token(token)
            uid = decoded_token["uid"]
            return JsonResponse({"uid": uid, "message": "User Verified"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=401)
