import random
from colorama import Fore, Style, init
import time

# Initialisation de Colorama
init()

# Jeu de caractères étendu
SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()-_=+[]{}|;:',.<>?/`~"

def caesar_cipher_extended(text, shift, mode):
    """
    Chiffre ou déchiffre un texte selon le mode choisi (encrypt/decrypt) en utilisant le jeu de caractères SYMBOLS.
    """
    result = ""

    if mode == "decrypt":
        shift = -shift  # Inversion du décalage pour déchiffrement

    for char in text:
        if char in SYMBOLS:
            idx = SYMBOLS.index(char)
            new_idx = (idx + shift) % len(SYMBOLS)
            result += SYMBOLS[new_idx]
        else:
            result += char  # Conserver les caractères non supportés (e.g., accents)

    return result

def decrypt_brute_force(text):
    """
    Tente de déchiffrer un texte en essayant toutes les clés possibles et affiche toutes les hypothèses.
    """
    print(f"{Fore.CYAN}\n--- Résultats de la force brute ---{Style.RESET_ALL}")
    print(f"{Fore.YELLOW}Essayez de repérer le texte déchiffré correctement parmi les propositions suivantes :{Style.RESET_ALL}\n")
    for shift in range(len(SYMBOLS)):
        decrypted = caesar_cipher_extended(text, shift, "decrypt")
        print(f"{Fore.GREEN}[Clé : {shift:3}] {Fore.WHITE}{decrypted}{Style.RESET_ALL}")
    print(f"\n{Fore.CYAN}--- Fin des résultats ---{Style.RESET_ALL}")

def display_menu():
    """
    Affiche le menu principal avec des couleurs.
    """
    print(f"\n{Fore.CYAN}{'=' * 50}")
    print(f"{Fore.YELLOW}Bienvenue dans le chiffreur Caesar 🎉")
    print(f"{Fore.CYAN}{'=' * 50}{Style.RESET_ALL}")
    print(f"{Fore.GREEN}1. Chiffrer un message (clé générée automatiquement)")
    print(f"2. Chiffrer un message (clé spécifiée par l'utilisateur)")
    print(f"3. Déchiffrer un message (avec clé)")
    print(f"4. Déchiffrer un message (force brute)")
    print(f"5. Quitter")
    print(f"{Fore.CYAN}{'=' * 50}{Style.RESET_ALL}")

def goodbye_message():
    """
    Affiche un message d'au revoir.
    """
    print(f"\n{Fore.MAGENTA}Merci d'avoir utilisé notre programme ! À bientôt 👋{Style.RESET_ALL}")

# Menu principal
while True:
    display_menu()
    choice = input(f"{Fore.WHITE}Votre choix : {Style.RESET_ALL}").strip()

    if choice == "1":  # Chiffrement avec clé générée
        message = input(f"{Fore.YELLOW}Entrez le message à chiffrer : {Style.RESET_ALL}")
        key = random.randint(0, len(SYMBOLS) - 1)  # Générer une clé aléatoire
        encrypted_message = caesar_cipher_extended(message, key, "encrypt")
        print(f"\n{Fore.GREEN}Message chiffré : {encrypted_message}{Style.RESET_ALL}")
        print(f"{Fore.CYAN}(La clé utilisée est : {key}){Style.RESET_ALL}")

    elif choice == "2":  # Chiffrement avec clé spécifiée
        message = input(f"{Fore.YELLOW}Entrez le message à chiffrer : {Style.RESET_ALL}")
        key = int(input(f"{Fore.YELLOW}Entrez la clé (0 à {len(SYMBOLS) - 1}) : {Style.RESET_ALL}"))
        encrypted_message = caesar_cipher_extended(message, key, "encrypt")
        print(f"\n{Fore.GREEN}Message chiffré : {encrypted_message}{Style.RESET_ALL}")

    elif choice == "3":  # Déchiffrement avec clé
        message = input(f"{Fore.YELLOW}Entrez le message à déchiffrer : {Style.RESET_ALL}")
        key = int(input(f"{Fore.YELLOW}Entrez la clé (0 à {len(SYMBOLS) - 1}) : {Style.RESET_ALL}"))
        decrypted_message = caesar_cipher_extended(message, key, "decrypt")
        print(f"\n{Fore.GREEN}Message déchiffré : {decrypted_message}{Style.RESET_ALL}")

    elif choice == "4":  # Décryptage par force brute
        message = input(f"{Fore.YELLOW}Entrez le message à déchiffrer : {Style.RESET_ALL}")
        decrypt_brute_force(message)

    elif choice == "5":  # Quitter
        goodbye_message()
        break

    else:
        print(f"{Fore.RED}Choix invalide. Veuillez réessayer.{Style.RESET_ALL}")
