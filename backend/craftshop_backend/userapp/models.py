from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class UserProfile(AbstractUser):
    email = models.EmailField(unique=True)
    fullname = models.CharField(max_length=255)
    bio = models.TextField(blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['fullname']
    def __str__(self):
        return self.email
    
