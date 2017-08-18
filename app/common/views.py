# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.


def home(request):
    """
    返回根目录
    :returns
    """
    return render(request, "/static/index.html")
