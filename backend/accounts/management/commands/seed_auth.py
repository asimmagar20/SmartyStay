from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = "Seed Admin and Customer users"

    def handle(self, *args, **kwargs):

        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser(
                username="admin",
                email="admin@hotel.com",
                password="admin123",
                role="admin"
            )
            self.stdout.write(self.style.SUCCESS("Admin user created!"))
        else:
            self.stdout.write(self.style.WARNING("Admin already exists."))

        if not User.objects.filter(username="customer").exists():
            User.objects.create_user(
                username="customer",
                email="customer@hotel.com",
                password="customer123",
                role="customer"
            )
            self.stdout.write(self.style.SUCCESS("Customer user created!"))
        else:
            self.stdout.write(self.style.WARNING("Customer already exists."))

        self.stdout.write(self.style.SUCCESS("Auth seeding completed successfully!"))