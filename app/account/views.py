# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from account.models import Account


def login(request):
    if request.method == 'POST':
        username = request.get['username']
        password = request.get['password']
        user = Account.objects.get(username=username, password=password)
        if user == None:
            return render(request, 'dist/index.html', locals())
        else:
            return render(request, 'dist/index.html', locals())
    else:
        return render(request, 'dist/index.html', locals())
