from flask import Flask, request, jsonify
from flask_cors import CORS
from cipher.caesar import caesar_cipher_extended
from cipher.caesar import brute_force_decrypt
import random
from cipher.caesar import SYMBOLS

app = Flask(__name__)
CORS(app)  


@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    message = data.get('message', '')
    key = data.get('key', None)

    # Si aucune clé n'est fournie, générer une clé aléatoire
    if key is None:
        key = random.randint(0, len(SYMBOLS) - 1)

    encrypted_message = caesar_cipher_extended(message, int(key), "encrypt")
    return jsonify({"key": key, "encrypted": encrypted_message})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    message = data.get('message', '')
    key = data.get('key', None)

    if key is not None:
        decrypted_message = caesar_cipher_extended(message, int(key), "decrypt")
        return jsonify({"decrypted": decrypted_message})
    else:
        # Si pas de clé fournie, effectuer une attaque par force brute
        brute_force_results = brute_force_decrypt(message)
        return jsonify({"brute_force_results": brute_force_results})

if __name__ == '__main__':
    app.run(debug=True)
