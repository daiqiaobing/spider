# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-08-18 09:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('menu_id', models.AutoField(primary_key=True, serialize=False)),
                ('menu_name', models.CharField(max_length=30)),
                ('parent_id', models.IntegerField(default=0)),
                ('keyword', models.CharField(default='', max_length=20)),
                ('menu_icon', models.ImageField(upload_to=b'')),
                ('menu_url', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'menu',
            },
        ),
    ]
