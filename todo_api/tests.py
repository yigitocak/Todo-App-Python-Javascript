from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from .models import Task


class TaskAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task_data = {'task_name': 'Test Task', 'priority': 1, 'status': 'open'}
        self.response = self.client.post(reverse('task-create'), self.task_data, format='json')
        self.task = Task.objects.get(pk=self.response.data['id'])

    def test_api_can_create_a_task(self):
        """Test the api has task creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_tasks(self):
        """Test the api can get a given task."""
        response = self.client.get(reverse('task-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, self.task)

    def test_api_can_update_task(self):
        """Test the api can update a given task."""
        change_task = {'status': 'done'}
        res = self.client.put(
            reverse('task-finish', kwargs={'id': self.task.pk}),
            change_task, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_task(self):
        """Test the api can delete a task."""
        response = self.client.delete(
            reverse('task-delete', kwargs={'id': self.task.pk}),
            format='json',
            follow=True
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
