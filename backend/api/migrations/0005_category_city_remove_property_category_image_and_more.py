# Generated by Django 5.2.1 on 2025-06-16 12:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_property_delete_listing'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='property',
            name='category_image',
        ),
        migrations.RemoveField(
            model_name='property',
            name='is_favourite',
        ),
        migrations.AlterField(
            model_name='property',
            name='property_for',
            field=models.IntegerField(choices=[(1, 'Sale'), (2, 'Lease')], default=1),
        ),
        migrations.AlterField(
            model_name='property',
            name='sqft',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='property',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='api.category'),
        ),
        migrations.AlterField(
            model_name='property',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='properties', to='api.city'),
        ),
    ]
