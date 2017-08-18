# -*- coding: utf-8 -*-
import json

from django.contrib import auth
from django.contrib.auth import authenticate, logout
from django.http import JsonResponse


def login(request):
    if request.method == "POST":
        account = json.loads(request.body)
        username = account.get('username', '')
        password = account.get('password', '')
        user = login_result(request=request, username=username, password=password)
    return JsonResponse(user)


def login_result(request, username, password):
    user = {}
    try:
        account = authenticate(request=request, username=username, password=password)
        if account is not None:
            auth.login(request, account)
            user['username'] = username
            user['success'] = 'true'
    except Exception as e:
        e.args
        print e.message
        user['success'] = 'false'
    return user


def user_logout(request):
    info = {}
    try:
        info['success'] = 'true'
        logout(request=request)
    except Exception as e:
        info['success'] = 'false'
    return JsonResponse(info)



