# models.py
from django.db import models
import string
import random

def generate_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

class EventOwner(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class EventVendor(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    services_offered = models.TextField()

    def __str__(self):
        return self.name

class Room(models.Model):
    code = models.CharField(max_length=6, unique=True, default=generate_unique_code)
    event_owner = models.ForeignKey(EventOwner, on_delete=models.CASCADE)
    event_vendors = models.ManyToManyField(EventVendor, related_name='rooms')

    def __str__(self):
        return self.code

# Create your models here.


class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
