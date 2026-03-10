from rest_framework import viewsets, permissions
from .models import Room
from .serializers import RoomSerializer


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return (
            request.user.is_authenticated
            and getattr(request.user, "role", "") == "admin"
        )

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all().order_by("-id")
    serializer_class = RoomSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context