from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import PostModels
from .serializers import SerializerPost

@api_view(['GET', 'POST'])
def postViews(req):
    if req.method == 'GET':
        info = PostModels.objects.all()
        serializer = SerializerPost(info, many=True)
        return Response(serializer.data)
    
    elif req.method == 'POST':
        serializer = SerializerPost(data=req.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

@api_view(['DELETE'])
def del_text(req, id):
    if req.method == 'DELETE':
        delte = PostModels.objects.get(id=id)
        delte.delete()
        return Response()