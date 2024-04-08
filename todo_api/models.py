from django.db import models

class Todo(models.Model):
    task_name = models.CharField(max_length=255)
    priority = models.IntegerField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.task_name
