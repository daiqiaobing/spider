# -*- coding: utf-8 -*-
"""spider URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from functools import partial

from django.conf.urls import url
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import logout

from account.login_filter import required
from account.views import login
from common.views import home

urlpatterns = [
    url(r'home', home, name='home')
]

urlpatterns = required(
    partial(login_required, login_url='login'),
    urlpatterns
)

urlpatterns += [
    url(r'^login', login, name='login'),
    url(r'^logout', logout, name='logout'),
]
