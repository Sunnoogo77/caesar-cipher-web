SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()-_=+[]{}|;:',.<>?/`~"

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

def brute_force_decrypt(text):
    possibilities = []
    for shift in range(len(SYMBOLS)):
        decrypted_text = caesar_cipher_extended(text, shift, "decrypt")
        possibilities.append({"key": shift, "decrypted_text": decrypted_text})
    return possibilities
