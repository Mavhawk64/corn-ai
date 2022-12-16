from rest_framework import serializers
from .models import *

class BoxImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoxImage
        fields = ('id', 'x', 'y', 'w', 'h')

class CornImageSerializer(serializers.ModelSerializer):
    # predictedBox = serializers.StringRelatedField(many=True)
    # actualBoxes = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = CornImage
        fields = ('id', 'imageName', 'predictedBox', 'actualBoxes')
