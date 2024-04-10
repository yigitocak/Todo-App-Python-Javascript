from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
from django.http import Http404
from rest_framework import status

@api_view(['GET'])
def task_list(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def task_create(request):
    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({"message": "invalid request body"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def task_delete(request, id):
    try:
        task = Task.objects.get(id=id)
    except Task.DoesNotExist:
        return Response({"message": "task does not exist"},status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        task.delete()
        return Response({"message:" "task deleted"} ,status=status.HTTP_200_OK)

@api_view(['POST'])
def task_finish(request, id):
    try:
        task = Task.objects.get(id=id)
    except Task.DoesNotExist:
        return Response({"message": "task does not exist"}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'POST':
        if task.status == "open":
            task.status = 'done'
            task.save()
            serializer = TaskSerializer(task)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "task is already done"}, status=status.HTTP_400_BAD_REQUEST)
