from django.urls import path
from .views import TodoListView, TodoCreateView

urlpatterns = [
    path('todos/', TodoListView.as_view(), name='todo-list'),
    path('todos/create/', TodoCreateView.as_view(), name='todo-create'),
]
