# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-08-14 07:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='username', max_length=30, unique=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('nickname', models.CharField(blank=True, max_length=45, null=True)),
                ('register_ip', models.GenericIPAddressField(blank=True, null=True, protocol='ipv4')),
                ('email', models.EmailField(blank=True, max_length=100, null=True, unique=True)),
                ('phone', models.CharField(blank=True, max_length=20, null=True, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
                'db_table': 'account',
                'swappable': 'AUTH_USER_MODEL',
                'permissions': (('person:info', '\u6211\u7684\u9762\u677f:\u4e2a\u4eba\u4fe1\u606f'), ('person:add', '\u6211\u7684\u9762\u677f:\u6dfb\u52a0'), ('person:delete', '\u6211\u7684\u9762\u677f:\u5220\u9664'), ('person:update', '\u6211\u7684\u9762\u677f:\u4fee\u6539')),
            },
        ),
    ]
