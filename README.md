---


# 🔐 **Caesar Cipher Project** 🎉  

Un programme Python interactif qui implémente un **chiffrement de César étendu** pour chiffrer et déchiffrer des messages. Idéal pour apprendre les bases de la cryptographie et développer des compétences Python.  

---

## ✨ **Fonctionnalités**  

1. **Chiffrement de Messages** :  
   - Génération automatique d’une **clé aléatoire** ou utilisation d’une **clé spécifiée** par l'utilisateur.  
   - Support étendu des caractères : lettres, chiffres, et symboles spéciaux.  

2. **Déchiffrement de Messages** :  
   - Utilisation d’une **clé connue** pour déchiffrer un message.  
   - **Force brute** pour explorer toutes les combinaisons possibles.  

3. **Expérience Personnalisée** :  
   - Une interface terminal interactive et colorée pour une expérience utilisateur agréable.  

---

## 🛠️ **Prérequis**  

- **Python 3.x**  
- **Bibliothèques requises** :  
   - `colorama` : Ajoute de la couleur dans le terminal.  

Installez les dépendances avec la commande suivante :  
```bash
pip install colorama
```  

---

## 🚀 **Utilisation**  

### 1. Clonez le dépôt :  
```bash
git clone https://github.com/votre-utilisateur/caesar_cipher_project.git
```  

### 2. Accédez au dossier du projet :  
```bash
cd caesar_cipher_project
```  

### 3. Lancez le programme :  
```bash
python main.py
```  

### 4. Interagissez avec le menu interactif :  
Choisissez parmi les options disponibles :  
```plaintext
==================================================
Bienvenue dans le chiffreur Caesar 🎉
==================================================
1. Chiffrer un message (clé générée automatiquement)
2. Chiffrer un message (clé spécifiée par l'utilisateur)
3. Déchiffrer un message (avec clé)
4. Déchiffrer un message (force brute)
5. Quitter
==================================================
Votre choix : 
```  

---

## 📂 **Structure du Projet**  

```plaintext
project-root/
│
├── backend/                  # Dossier pour le backend
│   ├── app.py                # Fichier principal pour l'API Flask (ou autre backend Python)
│   ├── requirements.txt      # Dépendances Python
│   ├── cipher/               # Logiciel métier pour le chiffrement
│   │   ├── __init__.py
│   │   ├── caesar.py         # Contient le chiffrement/déchiffrement Caesar
│   └── tests/                # Tests unitaires pour le backend
│       ├── test_caesar.py
│
├── frontend/                 # Dossier pour le frontend (React + Vite)
│   ├── public/               # Fichiers statiques (HTML, favicon, etc.)
│   ├── src/                  # Code source de l'application React
│   │   ├── components/       # Composants React
│   │   │   ├── CaesarForm.jsx  # Formulaire pour entrer le message et la clé
│   │   │   ├── ResultBox.jsx   # Affichage des résultats chiffrés/déchiffrés
│   │   │   └── BruteForce.jsx  # Composant pour le mode "force brute"
│   │   ├── pages/            # Pages principales de l'application
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── services/         # Gestion des appels API vers le backend
│   │   │   └── cipherAPI.js  # Méthodes pour interagir avec le backend
│   │   ├── App.jsx           # Point d'entrée React
│   │   ├── main.jsx          # Initialisation de l'application React
│   │   └── styles/           # Fichiers CSS (ou SCSS, Tailwind, etc.)
│   └── vite.config.js        # Configuration de Vite
│
├── .gitignore                # Fichiers et dossiers à ignorer par Git
├── README.md                 # Documentation du projet
└── package.json              # Dépendances et scripts du projet

```  

---

## 📝 **Exemple de Sortie**  

Voici un exemple d’utilisation pour le chiffrement d’un message avec une clé générée automatiquement :  

```plaintext
==================================================
Bienvenue dans le chiffreur Caesar 🎉
==================================================
Entrez votre message : Hello, World!
Message chiffré : Kvqqn, Yqtnf!
Clé utilisée : 2
==================================================
```  

Pour le déchiffrement par force brute, voici un exemple :  

```plaintext
==================================================
Essai avec la clé 1 : Gdkkn, Vnqkc!
Essai avec la clé 2 : Kvqqn, Yqtnf!
Essai avec la clé 3 : Juppm, Xzrmf!
...
```  

---

## 👤 **Auteur**  

Pour toute question, suggestion ou collaboration, n'hésitez pas à me contacter via :  

- **[LinkedIn](https://www.linkedin.com/in/sunnoogo-caleb-tapsoba-130584292/)**  
- **[GitHub](https://github.com/Sunnoogo77)**  
