from django.urls import path
from .views import TodoListView, TodoCreateView, TodoDeleteView

urlpatterns = [
    path('todos/', TodoListView.as_view(), name='todo-list'),
    path('todos/create/', TodoCreateView.as_view(), name='todo-create'),
    path('todos/delete/<int:id>/', TodoDeleteView.as_view(), name='todo-delete'),
]
