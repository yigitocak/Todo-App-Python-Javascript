from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_api', '0003_task_delete_todo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='created_at',
        ),
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(default='open', max_length=255),
        ),
    ]
