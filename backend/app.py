# # from flask import Flask, request, jsonify
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app) # This allows the frontend to talk to this backend

# # # --- PASTE THE CODE HERE ---
# # @app.route('/register', methods=['POST'])
# # def register():
# #     data = request.json  # This grabs the form data from React
# #     print(data)         # This will show the data in your terminal
# #     return jsonify({"message": "User registered successfully!"}), 201
# # # ---------------------------

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5000)


# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS

# # 1. SETUP
# app = Flask(__name__)
# CORS(app)

# # NOTE: Change 'your_password' to your real PostgreSQL password!
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:chari@localhost:5432/med_system'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5432/med_system'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# # 2. THE ANATOMY (Database Table Structure)
# # class User(db.Model):
# #     id = db.Column(db.Integer, primary_key=True)
# #     username = db.Column(db.String(80), nullable=False)
# #     email = db.Column(db.String(120), unique=True, nullable=False)
# #     password = db.Column(db.String(200), nullable=False)
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(200), nullable=False)
#     role = db.Column(db.String(20), nullable=False, default='Patient') # Added this!

# # This creates the table inside PostgreSQL automatically
# with app.app_context():
#     db.create_all()

# # # 3. THE ROUTES (The Logic)
# # @app.route('/register', methods=['POST'])
# # def register():
# #     data = request.json
    
# #     # Create the new user object
# #     new_user = User(
# #         username=data.get('username'),
# #         email=data.get('email'),
# #         password=data.get('password') 
# #     )
    
# #     try:
# #         db.session.add(new_user)
# #         db.session.commit()
# #         return jsonify({"message": "User saved to database successfully!"}), 201
# #     except Exception as e:
# #         # If the email already exists or another error occurs
# #         db.session.rollback()
# #         return jsonify({"error": str(e)}), 400



# # @app.route('/register', methods=['POST'])
# # def register():
#     # data = request.json
    
#     # Extract the names from your React form fields
#     # first_name = data.get('firstName') # Match the 'name' attribute in your React input
#     # last_name = data.get('lastName')
    
#     # # Combine them to create the username
#     # full_username = f"{first_name} {last_name}"
    
#     # new_user = User(
#     #     username=full_username,  # Now it won't be NULL
#     #     email=data.get('email'),
#     #     password=data.get('password')
#     # )
    
#     # try:
#     #     db.session.add(new_user)
#     #     db.session.commit()
#     #     return jsonify({"message": "User saved to database successfully!"}), 201
#     # except Exception as e:
#     #     db.session.rollback()
#     #     return jsonify({"error": str(e)}), 400
    


# @app.route('/register', methods=['POST'])
# # @app.route('/login', methods=['POST'])
# # @app.route('/login', methods=['POST'])
# # # def login():
# #     data = request.get_json()
# #     email = data.get('email')
# #     password = data.get('password')
# #     selected_role = data.get('role') # Get role from React

# #     user = User.query.filter_by(email=email).first()

# #     if user and user.password == password: # In production, use hashing!
# #         # Double check if the user is trying to log into the correct role
# #         if user.role != selected_role:
# #             return jsonify({"message": f"User is registered as {user.role}, not {selected_role}"}), 401
            
# #         return jsonify({
# #             "message": "Login successful",
# #             "user": {
# #                 "username": user.username,
# #                 "role": user.role
# #             }
# #         })
    
# #     return jsonify({"message": "Invalid credentials"}), 401
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     print(f"Login Attempt: {data}") # DEBUG: See what React sent

#     user = User.query.filter_by(email=data.get('email')).first()
    
#     if not user:
#         print("User not found in database") # DEBUG
#         return jsonify({"message": "User not found"}), 401

#     print(f"User found: {user.username}, Role in DB: {user.role}") # DEBUG
    
#     # ... rest of your logic
# @app.route('/admin/users', methods=['GET'])
# def get_all_users():
#     # In a real app, we'd check if the person asking is actually an Admin!
#     users = User.query.all()
#     user_list = []
#     for user in users:
#         user_list.append({
#             "id": user.id,
#             "username": user.username,
#             "email": user.email
#         })
#     return jsonify(user_list), 200
#     # # 4. THE POWER SWITCH
# if __name__ == '__main__':
#  app.run(debug=True, port=5000)

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5432/med_system'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 1. Database Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='Patient')

# Create tables
with app.app_context():
    db.create_all()

# 2. Registration Route
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    # Logic to handle if names are sent separately
    username = data.get('username') or f"{data.get('firstName', '')} {data.get('lastName', '')}".strip()
    
    new_user = User(
        username=username,
        email=data.get('email'),
        password=data.get('password'),
        role=data.get('role', 'Patient') # Save the role from the form!
    )
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

# 3. Login Route (FIXED)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    selected_role = data.get('role')

    user = User.query.filter_by(email=email).first()
    
    # Check if user exists
    if not user:
        return jsonify({"message": "User not found"}), 401

    # Check password and role
    if user.password == password:
        if user.role != selected_role:
            return jsonify({"message": f"Please login as a {user.role}"}), 401
            
        return jsonify({
            "message": "Login successful",
            "user": {
                "username": user.username,
                "role": user.role
            }
        }), 200
    
    return jsonify({"message": "Invalid password"}), 401

if __name__ == '__main__':
    app.run(debug=True, port=5000)