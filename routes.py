from flask import Blueprint, request, jsonify, render_template
import random




# Création d'un blueprint pour les routes
routes = Blueprint(
    "routes", 
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static")

#Route pour la page d'aceuil
@routes.route('/')
def home():
    return render_template('index.html')

@routes.route('/others')
def home1():
    return render_template('others.html')

SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()-_=+[]{}|;:',.<>?/`~"

# Fonction de chiffrement César
def caesar_cipher_extended(text, shift, mode):
    result = ""
    if mode == "decrypt":
        shift = -shift
    for char in text:
        if char in SYMBOLS:
            idx = SYMBOLS.index(char)
            new_idx = (idx + shift) % len(SYMBOLS)
            result += SYMBOLS[new_idx]
        else:
            result += char
    return result

@routes.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    message = data.get('message')
    key = data.get('key', random.randint(0, len(SYMBOLS) - 1))
    encrypted_message = caesar_cipher_extended(message, key, "encrypt")
    return jsonify({"encrypted_message": encrypted_message, "key": key})

@routes.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.get_json()
    message = data.get('message')
    key = data.get('key')
    decrypted_message = caesar_cipher_extended(message, key, "decrypt")
    return jsonify({"decrypted_message": decrypted_message})

@routes.route('/bruteforce', methods=['POST'])
def brute_force():
    data = request.get_json()
    message = data.get('message')
    results = []
    for shift in range(len(SYMBOLS)):
        decrypted = caesar_cipher_extended(message, shift, "decrypt")
        results.append({"key": shift, "decrypted_message": decrypted})
    return jsonify(results)

# Fonction pour enregistrer les routes dans l'application Flask
def register_routes(app):
    app.register_blueprint(routes)
