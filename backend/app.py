from flask import Flask, request, jsonify
from flask_cors import CORS
from cipher.caesar import caesar_cipher_extended

app = Flask(__name__)
CORS(app)  # Pour autoriser les requêtes cross-origin depuis le frontend

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    message = data.get('message', '')
    key = int(data.get('key', 0))
    result = caesar_cipher_extended(message, key, "encrypt")
    return jsonify({"result": result})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    message = data.get('message', '')
    key = int(data.get('key', 0))
    result = caesar_cipher_extended(message, key, "decrypt")
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
