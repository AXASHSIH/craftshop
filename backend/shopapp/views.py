from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        # only return available products
        return Product.objects.filter(is_available=True)

    def get_serializer_context(self):
        return {"request": self.request}  # for full image URL
        

class ProductDetailAPIView(generics.RetrieveAPIView):  # 👈 NEW
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {"request": self.request}



