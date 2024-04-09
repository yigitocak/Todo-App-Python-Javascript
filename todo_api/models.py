from django.db import models


class Task(models.Model):
    task_name = models.CharField(max_length=255)
    priority = models.IntegerField()
    status = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.task_name
