import sys
import os

# This tells Python to look in the current folder for app.py
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from app import app, db
    with app.app_context():
        print("Connecting to PostgreSQL...")
        db.drop_all()
        print("Old tables dropped.")
        db.create_all()
        print("New tables with 'role' column created successfully!")
except Exception as e:
    print(f"Error: {e}")