from django.urls import path, include

urlpatterns = [
    path('api/', include('todo_api.urls')),
]
