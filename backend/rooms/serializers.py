from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    final_image = serializers.SerializerMethodField()

    class Meta:
        model = Room
        fields = [
            "id",
            "name",
            "description",
            "price",
            "room_type",
            "image",
            "image_url",
            "final_image",
        ]

    def get_final_image(self, obj):
        request = self.context.get("request")

        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url

        if obj.image_url:
            return obj.image_url

        return None