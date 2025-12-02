from django.contrib import admin
from .models import Product, ProductImage


# ✅ Multiple images inside product admin
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3
    preview_image = ["image"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ("name", "price", "stock", "is_available", "created_at")
    search_fields = ("name", "description")
    list_filter = ("is_available", "created_at")
    ordering = ("-created_at",)

