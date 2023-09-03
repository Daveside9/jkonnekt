from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer, UpdateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

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
