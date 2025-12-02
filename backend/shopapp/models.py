from django.db import models



class Product(models.Model):
    CATEGORY_CHOICES = [
        ("Bottle Art", "Bottle Art"),
        ("Wall Art", "Wall Art"),
        ("Other", "Other"),   #You can add more categories as needed
    ]

    name = models.CharField(max_length=200)
    category = models.CharField(          # 👈 dropdown in admin
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Bottle Art",             # or pick any default you like
    )

    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)

    specifications = models.TextField(blank=True, null=True)
    care_instructions = models.TextField(blank=True, null=True)

    image = models.ImageField(upload_to="products/", blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product,
        related_name="images",
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="products/gallery/")

    def __str__(self):
        return f"Image for {self.product.name}"

