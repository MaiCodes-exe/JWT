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


##login

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    if not (email and password):
        return jsonify({"error": "Email or password missing"}), 401

    user = User.lookup(email)

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.serialize())
        return jsonify({'token' : access_token}), 200
    return {'error': 'user not found'}, 404

##signingup

@api.route('/signup', methods=['POST'])
def create_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    password_hash = generate_password_hash(password)

    user = User(
        email = email,
        password = password_hash,
        is_active = True
    )
    # user.create_user()
    try:
        user.create_user()
    except exc.IntegrityError as error: 
        print(error)
        return {"error":"something went wrong"}, 409

    create_user = User.lookup(email)
    access_token = create_access_token(identity=create_user.serialize())

    # return jsonify(user.serialize())
    return jsonify({'token' : access_token}), 200



@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    return jsonify({"id": user.id, "email": user.email}), 200
