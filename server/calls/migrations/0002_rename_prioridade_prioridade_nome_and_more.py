# Generated by Django 5.0.1 on 2024-01-29 01:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calls', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prioridade',
            old_name='prioridade',
            new_name='nome',
        ),
        migrations.RenameField(
            model_name='status',
            old_name='status',
            new_name='nome',
        ),
    ]
