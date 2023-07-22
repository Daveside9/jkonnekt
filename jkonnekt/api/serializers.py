# serializers.py
from rest_framework import serializers
from .models import EventOwner, EventVendor, Room

class EventOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventOwner
        fields = '__all__'

class EventVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventVendor
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    event_vendors = EventVendorSerializer(many=True)

    class Meta:
        model = Room
        fields = '__all__'
