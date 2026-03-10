from django.core.management.base import BaseCommand
from rooms.models import Room


class Command(BaseCommand):
    help = "Seed initial hotel rooms (Prices in USD)"

    def handle(self, *args, **kwargs):

        rooms_data = [
            {
                "name": "Soaltee Westend Lakeside Pokhara",
                "description": "Luxury lakeside hotel in Pokhara.",
                "price": 72.00,
                "room_type": "suite",
                "image": "rooms/Soaltee-Westend-Lakeside-Pokhara.jpg",
            },
            {
                "name": "Premium Suite",
                "description": "Premium suite with mountain views.",
                "price": 59.00,
                "room_type": "suite",
                "image": "rooms/Everest_View_Premium_Suite.jpg",
            },
            {
                "name": "Lumbini Pilgrim Stay",
                "description": "Peaceful stay near Lumbini.",
                "price": 21.00,
                "room_type": "double",
                "image": "rooms/Lumbini_Pilgrim_Stay.jpg",
            },
            {
                "name": "Nagarkot Sunrise View",
                "description": "Perfect sunrise mountain view room.",
                "price": 24.00,
                "room_type": "single",
                "image": "rooms/Nagarkot_Sunrise_View.jpg",
            },
            {
                "name": "Patan Heritage Suite",
                "description": "Traditional heritage room in Patan.",
                "price": 32.00,
                "room_type": "suite",
                "image": "rooms/Patan_Heritage_Suite.jpg",
            },
            {
                "name": "Lakeside Pokhara Double",
                "description": "Comfortable double room near lake.",
                "price": 26.00,
                "room_type": "double",
                "image": "rooms/Lakeside_Pokhara_Double.jpg",
            },
            {
                "name": "Thamel Smart Single",
                "description": "Cozy single room in Thamel.",
                "price": 15.00,
                "room_type": "single",
                "image": "rooms/Thamel_Smart_Single.jpg",
            },
            {
                "name": "Everest View Premium Suite",
                "description": "Luxury suite with Himalayan views.",
                "price": 64.00,
                "room_type": "suite",
                "image": "rooms/Everest_View_Premium_Suite.jpg",
            },
            {
                "name": "Lumbini Peace Room",
                "description": "Minimal peaceful room near Lumbini.",
                "price": 13.00,
                "room_type": "single",
                "image": "rooms/Lumbini_Peace_Room.jpg",
            },
            {
                "name": "Chitwan Jungle Retreat",
                "description": "Comfortable retreat near Chitwan National Park.",
                "price": 29.00,
                "room_type": "double",
                "image": "rooms/Chitwan_Jungle_Retreat.jpg",
            },
            {
                "name": "Pokhara Lakeside Suite",
                "description": "Elegant suite near Phewa Lake.",
                "price": 61.00,
                "room_type": "suite",
                "image": "rooms/Pokhara_Lakeside_Suite.jpg",
            },
            {
                "name": "Kathmandu Heritage Deluxe",
                "description": "Traditional Newari-inspired deluxe room.",
                "price": 36.00,
                "room_type": "double",
                "image": "rooms/Kathmandu_Heritage_Deluxe.jpg",
            },
            {
                "name": "Single Budget Room",
                "description": "Affordable and comfortable room.",
                "price": 11.00,
                "room_type": "single",
                "image": "rooms/Single_Budget_Room.jpg",
            },
            {
                "name": "Business Double",
                "description": "Perfect for business travelers.",
                "price": 34.00,
                "room_type": "double",
                "image": "rooms/Business_Double.jpg",
            },
            {
                "name": "Luxury Suite",
                "description": "Ocean View Premium Suite.",
                "price": 74.00,
                "room_type": "suite",
                "image": "rooms/Luxury_Suite.jpg",
            },
        ]

        Room.objects.all().delete()

        for room in rooms_data:
            Room.objects.create(**room)

        self.stdout.write(self.style.SUCCESS("Rooms seeded successfully (USD prices)!"))