from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    ordering = ['email']
    list_display = ('email', 'name', 'mobile_number', 'address', 'is_staff', 'is_active')
    search_fields = ('email', 'mobile_number')
    list_filter = ('is_staff', 'is_active')
    readonly_fields = ('date_joined',)

    fieldsets = (
        (None, {'fields': ('email', 'password',)}),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
        ('Personal Info', {'fields': ('name','mobile_number', 'address')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name','email', 'mobile_number', 'address', 'password1', 'password2'),
        }),
    )

    filter_horizontal = ('groups', 'user_permissions')
