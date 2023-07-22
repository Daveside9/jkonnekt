# urls.py
from django.urls import path
from .views import (
    EventOwnerListView, EventOwnerDetailView,
    EventVendorListView, EventVendorDetailView,
    RoomListView, RoomDetailView,
)

urlpatterns = [
    path('event-owners/', EventOwnerListView.as_view(), name='eventowner-list'),
    path('event-owners/<int:pk>/', EventOwnerDetailView.as_view(), name='eventowner-detail'),
    path('event-vendors/', EventVendorListView.as_view(), name='eventvendor-list'),
    path('event-vendors/<int:pk>/', EventVendorDetailView.as_view(), name='eventvendor-detail'),
    path('rooms/', RoomListView.as_view(), name='room-list'),
    path('rooms/<int:pk>/', RoomDetailView.as_view(), name='room-detail'),
]
