from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    profile_image = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = (
            "id",
            "name",
            "email",
            "mobile_number",
            "address",
            "profile_image",
            "date_joined",
        )
        read_only_fields = ("id", "date_joined")



class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ("name", "email", "mobile_number", "address", "password")

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
