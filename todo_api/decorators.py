from django.conf import settings
from django.http import JsonResponse

def api_key_required(view_func):
    def wrap(request, *args, **kwargs):
        api_key = request.headers.get('X-API-KEY')
        if api_key != settings.API_KEY:
            return JsonResponse({'message': 'Invalid API key'}, status=403)
        return view_func(request, *args, **kwargs)
    return wrap
