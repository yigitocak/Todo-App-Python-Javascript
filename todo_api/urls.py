from django.urls import path
from .views import task_delete, task_list, task_create

urlpatterns = [
    path('tasks/', task_list, name='task-list'),
    path('tasks/create/', task_create, name='task-create'),
    path('tasks/delete/<int:id>/', task_delete, name='task-delete'),
]
