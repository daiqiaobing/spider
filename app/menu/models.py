# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.db.models import Model


class Menu(Model):

    # id
    menu_id = models.AutoField(primary_key=True)
    # 菜单名称
    menu_name = models.CharField(max_length=30, blank=False)
    # 父标签ID
    parent_id = models.IntegerField(blank=False, default=0)
    # 关键字
    keyword = models.CharField(blank=False, default='', max_length=20)
    # 菜单图标
    menu_icon = models.ImageField()
    # 菜单对应的url
    menu_url = models.CharField(max_length=30)

    class Meta(object):
        db_table = 'menu'
