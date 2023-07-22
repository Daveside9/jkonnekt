# views.py
from rest_framework import generics
from .models import EventOwner, EventVendor, Room
from .serializers import EventOwnerSerializer, EventVendorSerializer, RoomSerializer

class EventOwnerListView(generics.ListCreateAPIView):
    queryset = EventOwner.objects.all()
    serializer_class = EventOwnerSerializer

class EventOwnerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EventOwner.objects.all()
    serializer_class = EventOwnerSerializer

class EventVendorListView(generics.ListCreateAPIView):
    queryset = EventVendor.objects.all()
    serializer_class = EventVendorSerializer

class EventVendorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EventVendor.objects.all()
    serializer_class = EventVendorSerializer

class RoomListView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
