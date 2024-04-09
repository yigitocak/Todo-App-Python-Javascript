from django.urls import path
from .views import todo_list, todo_create, todo_delete

urlpatterns = [
    path('todos/', todo_list, name='todo-list'),
    path('todos/create/', todo_create, name='todo-create'),
    path('todos/delete/<int:id>/', todo_delete, name='todo-delete'),
]
