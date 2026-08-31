from rest_framework import serializers
from .models import PostModels

class SerializerPost(serializers.ModelSerializer):
    class Meta:
        model = PostModels
        fields = '__all__'