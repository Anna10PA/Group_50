from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductsSerializers
from .models import ProductsModel

@api_view(['GET', 'POST', "PUT"])
def home(req):
    if req.method == 'GET':
        products = ProductsModel.objects.all()
        serializer = ProductsSerializers(products, many=True)
        return Response(serializer.data)

    
    elif req.method == 'POST':
        serializer = ProductsSerializers(data = req.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


    elif req.method == 'PUT':
        product_id = req.data.get('id')
        product = ProductsModel.objects.get(id=product_id)
        serializer = ProductsSerializers(product, data=req.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)



@api_view(['DELETE'])
def delete_product(req, id):
    if req.method == 'DELETE':
        serializer = ProductsSerializers(data=req.data)
        delete_id = ProductsModel.objects.get(id=id)
        delete_id.delete()

        products = ProductsModel.objects.all()
        serializer = ProductsSerializers(products, many=True)
        return Response(serializer.data)
        