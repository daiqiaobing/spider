# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.db import models


class AccountManager(BaseUserManager):
    def _create_user(self, username, password, is_staff, is_superuser, **extra_fields):

        if not username:
            raise ValueError('The given username must be set')

        if not password:
            raise ValueError('The given password must be set')

        is_active = extra_fields.pop("is_active", True)

        now = datetime.now()
        user = self.model(username=username, is_active=is_active, is_staff=is_staff,
                          is_superuser=is_superuser, last_login=now, date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password, **extra_fields):
        """Create and save an SteamUser with the given Steam UID and password.

        :param str username: username
        :param str password: user password
        :return custom_user.models.EmailUser user: regular user

        """
        is_staff = extra_fields.pop("is_staff", False)
        return self._create_user(username, password, is_staff, False, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        """Create and save an EmailUser with the given Steam UID and password.

        :param str username: username
        :param str password: user password
        :return custom_user.models.EmailUser user: admin user

        """
        return self._create_user(username, password, True, True, **extra_fields)


class AbstractAccount(AbstractBaseUser, PermissionsMixin):
    # 账号名称
    username = models.CharField(max_length=30, unique=True, help_text='username', error_messages={
        'unique': "A user with that username already exists.", })
    is_staff = models.BooleanField(default=False, )
    is_active = models.BooleanField(default=True, )
    date_joined = models.DateTimeField(auto_now_add=True, editable=False, blank=True)
    # 修改时间
    updated = models.DateTimeField(null=True, blank=True, auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'account'
        abstract = True

    def get_full_name(self):
        """Return the email."""
        return self.username

    def get_short_name(self):
        """Return the email."""
        return self.username


class Account(AbstractAccount):
    """
    会员账号
    """
    nickname = models.CharField(max_length=45, null=True, blank=True)
    register_ip = models.GenericIPAddressField(protocol='ipv4', null=True, blank=True)
    email = models.EmailField(max_length=100, unique=True, blank=True, null=True)
    phone = models.CharField(max_length=20, null=True, blank=True, unique=True)

    class Meta(AbstractAccount.Meta):
        permissions = (
            ('person:info', '我的面板:个人信息'),
            ('person:add', '我的面板:添加'),
            ('person:delete', '我的面板:删除'),
            ('person:update', '我的面板:修改'),
        )
        swappable = 'AUTH_USER_MODEL'
