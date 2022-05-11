"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import exc

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

##signup route


@api.route('/signup', methods=['POST'])
def create_user():
    # email = request.json.get("Email", None)
    # password = request.json.get("Password", None)
    request_data = request.get_json()

    password_hash = generate_password_hash(request_data['Password'])

    user = User(
        email = request_data['Email'],
        password = password_hash
    )
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())


# ##login

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("Email")
    password = request.json.get("Password")

    if not (email and password):
        return jsonify({"error": "Email or password missing"}), 401
    user = User.query.filter_by(email= email).first()
    print(user)
    hash_password = generate_password_hash(password)
    if user and check_password_hash(user.password, hash_password):
        access_token = create_access_token(identity=User.id())
        return jsonify({'token' : access_token}), 200
    # return {'error': 'user not found'}, 404
    access_token = create_access_token(identity= user.serialize())
    # return jsonify(user.serialize())
    return jsonify({'token' : access_token}), 200




@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    return jsonify({"id": user.id, "email": user.email}), 200
