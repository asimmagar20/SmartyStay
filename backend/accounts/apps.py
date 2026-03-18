from django.apps import AppConfig
from django.db.models.signals import post_migrate

class AccountsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "accounts"

    def ready(self):
        post_migrate.connect(seed_nepal_data, sender=self)

def seed_nepal_data(sender, **kwargs):
    """
    Auto-seed Nepal context data after migrate.
    Runs safely using get_or_create (no duplicates).
    """
    from django.contrib.auth import get_user_model
    from rooms.models import Room

    User = get_user_model()

    # Admin
    User.objects.get_or_create(
    username="admin",
    defaults={
        "role": "admin",
        "is_staff": True,
        "is_superuser": True,
        "email": "admin@example.com"
    },
)
    admin_user = User.objects.get(username="admin")
    if not admin_user.is_superuser:
        admin_user.is_staff = True
        admin_user.is_superuser = True
        admin_user.role = "admin"
        admin_user.set_password("admin123")
        admin_user.save()
    else:

        if not admin_user.check_password("admin123"):
            admin_user.set_password("admin123")
            admin_user.save()

    # Customer
    User.objects.get_or_create(
    username="customer",
    defaults={
        "role": "customer",
        "email": "customer@example.com"
    },
)
    customer_user = User.objects.get(username="customer")
    if not customer_user.check_password("customer123"):
        customer_user.role = "customer"
        customer_user.set_password("customer123")
        customer_user.save()

    # Nepal themed Rooms
    rooms = [
    {
        "name": "Kathmandu Heritage Deluxe",
        "description": "Traditional Newari-inspired room near Durbar Square with modern comfort.",
        "price": "120.00",
        "room_type": "double",
        "image_url": "https://source.unsplash.com/1600x900/?kathmandu,nepal"
    },
    {
        "name": "Pokhara Lakeside Suite",
        "description": "Elegant suite inspired by Phewa Lake — perfect for a peaceful stay.",
        "price": "220.00",
        "room_type": "suite",
        "image_url": "https://source.unsplash.com/1600x900/?pokhara,nepal,lake"
    },
    {
        "name": "Chitwan Jungle Retreat",
        "description": "Nature-themed stay inspired by Chitwan National Park — cozy and eco-friendly.",
        "price": "95.00",
        "room_type": "single",
        "image_url": "https://source.unsplash.com/1600x900/?chitwan,nepal,jungle"
    },
    {
        "name": "Lumbini Peace Room",
        "description": "Minimal premium comfort inspired by Lumbini — calm and restful vibe.",
        "price": "85.00",
        "room_type": "single",
        "image_url": "https://source.unsplash.com/1600x900/?lumbini,nepal"
    },
    {
        "name": "Everest View Premium Suite",
        "description": "Luxury suite with Himalayan-inspired interior — for unforgettable stays.",
        "price": "280.00",
        "room_type": "suite",
        "image_url": "https://source.unsplash.com/1600x900/?mount,everest,nepal"
    },
]
    
    for r in rooms:
        Room.objects.get_or_create(
            name=r["name"],
            defaults={
                "description": r["description"],
                "price": r["price"],
                "room_type": r["room_type"],
            },
        )