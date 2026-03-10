from rest_framework import serializers
from django.db.models import Q
from .models import Booking
from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class BookingSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    nights = serializers.SerializerMethodField()
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = "__all__"
        read_only_fields = ["user"]

    def get_nights(self, obj):
        if obj.check_in and obj.check_out:
            return (obj.check_out - obj.check_in).days
        return None

    def get_total_price(self, obj):
        if obj.check_in and obj.check_out and obj.room:
            nights = (obj.check_out - obj.check_in).days
            return nights * obj.room.price
        return None

    def validate(self, data):

        if self.instance and "status" in data and len(data) == 1:
            return data

        room = data.get("room") or getattr(self.instance, "room", None)
        check_in = data.get("check_in") or getattr(self.instance, "check_in", None)
        check_out = data.get("check_out") or getattr(self.instance, "check_out", None)

        if not room:
            raise serializers.ValidationError({"room": "Room is required."})

        if not check_in:
            raise serializers.ValidationError({"check_in": "Check-in is required."})

        if not check_out:
            raise serializers.ValidationError({"check_out": "Check-out is required."})

        if check_out <= check_in:
            raise serializers.ValidationError(
                {"check_out": "Check-out must be after check-in."}
            )

        overlapping = (
            Booking.objects.filter(
                room=room,
                status__in=["pending", "approved"],
            )
            .exclude(id=self.instance.id if self.instance else None)
            .filter(Q(check_in__lt=check_out) & Q(check_out__gt=check_in))
        )

        if overlapping.exists():
            raise serializers.ValidationError(
                {"detail": "Room not available for selected dates."}
            )

        return data