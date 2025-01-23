from cryptography.fernet import Fernet
import os

# Génération d'une clé de chiffrement et stockage dans un fichier
KEY_FILE = "encryption_key.key"

def generate_key():
    """Génère une clé et la stocke dans un fichier si elle n'existe pas."""
    if not os.path.exists(KEY_FILE):
        key = Fernet.generate_key()
        with open(KEY_FILE, 'wb') as key_file:
            key_file.write(key)
    else:
        with open(KEY_FILE, 'rb') as key_file:
            key = key_file.read()
    return key

def encrypt_file(input_file_path, output_file_path):
    """Chiffre un fichier et enregistre la sortie."""
    key = generate_key()
    cipher = Fernet(key)
    
    with open(input_file_path, 'rb') as file:
        file_data = file.read()

    encrypted_data = cipher.encrypt(file_data)

    with open(output_file_path, 'wb') as enc_file:
        enc_file.write(encrypted_data)

    return output_file_path

def decrypt_file(input_file_path, output_file_path):
    """Déchiffre un fichier et enregistre la sortie."""
    key = generate_key()
    cipher = Fernet(key)

    with open(input_file_path, 'rb') as file:
        encrypted_data = file.read()

    decrypted_data = cipher.decrypt(encrypted_data)

    with open(output_file_path, 'wb') as dec_file:
        dec_file.write(decrypted_data)

    return output_file_path
