# 🔐 **Mini Cryptographie Web** 🎉  
Une application web complète permettant de **chiffrer et déchiffrer** des **messages** et des **fichiers**, idéale pour explorer les bases de la cryptographie de manière interactive. Le projet est divisé en deux parties :  

1. **Backend** - Développé en Python (Flask), gérant la logique de chiffrement/déchiffrement et les interactions avec les fichiers.  
2. **Frontend** - Une application web développée en React permettant une interface utilisateur interactive et intuitive.  

---

## ✨ **Fonctionnalités**  

### 🔡 Chiffrement de Messages :  
- Chiffrement et déchiffrement de **textes** à l'aide d'une clé spécifique ou aléatoire.  
- Prise en charge de **lettres, chiffres et symboles spéciaux**.  
- Déchiffrement via **clé connue** ou **force brute** pour tester toutes les combinaisons.  

### 📁 Chiffrement de Fichiers :  
- Chiffrement et déchiffrement de **fichiers texte**.  
- Téléchargement des fichiers chiffrés/déchiffrés.  
- Sécurité renforcée grâce à l'utilisation de clés personnalisées.  

### 🎨 Interface Utilisateur :  
- Application web réactive et facile à utiliser.  
- Visualisation des résultats en temps réel.  
- Upload et téléchargement de fichiers simplifiés.  

---

## 🛠️ **Prérequis**  

### 🔧 Backend :  
- **Python 3.x**  
- Bibliothèques requises :  
   ```bash
   pip install -r requirements.txt
   ```  
   
### 🖥️ Frontend :  
- **Node.js** (version 16+)  
- Installer les dépendances avec :  
   ```bash
   npm install
   ```

---

## 🚀 **Installation et Lancement**  

### 1. Clonez le dépôt :  
```bash
git clone https://github.com/Sunnoogo77/file-text-encryptor.git
cd file-text-encryptor
```

### 2. Configuration du Backend :  

```bash
cd backend
python app.py
```

Le serveur backend démarrera sur `http://127.0.0.1:5000`.

### 3. Configuration du Frontend :  

```bash
cd frontend
npm run dev
```

L'application web sera disponible sur `http://localhost:5173`.

---

## 📂 **Structure du Projet**  

```plaintext
file-text-encryptor/
│
├── backend/                   # Dossier pour le backend (Flask)
│   ├── cipher/                 # Contient la logique de chiffrement
│   │   ├── caesar.py            # Chiffrement de texte
│   │   ├── file_cipher.py        # Chiffrement de fichiers
│   ├── uploads/                 # Stockage temporaire des fichiers
│   ├── app.py                    # API Flask
│   ├── encryption_key.key         # Clé de chiffrement
│   └── requirements.txt           # Dépendances Python
│
├── frontend/                   # Dossier pour le frontend (React)
│   ├── public/                  # Fichiers statiques
│   ├── src/                      # Code source React
│   │   ├── assets/                # Ressources (images, icônes)
│   │   ├── components/            # Composants React
│   │   │   ├── CaesarForm.jsx      # Formulaire de chiffrement de texte
│   │   │   ├── FileEncryptForm.jsx # Formulaire de chiffrement de fichiers
│   │   ├── services/               # Gestion des appels API
│   │   │   ├── cipherAPI.js         # API pour le chiffrement de texte
│   │   │   ├── fileAPI.js           # API pour le chiffrement de fichiers
│   │   ├── App.jsx                  # Point d'entrée React
│   │   ├── main.jsx                 # Initialisation de l'application
│   └── package.json                 # Dépendances et scripts frontend
│
├── .gitignore                   # Fichiers à ignorer
├── README.md                    # Documentation du projet
└── package-lock.json             # Gestion des dépendances
```

---

## 📝 **Exemples d'Utilisation**  

### 1. Chiffrement d'un Message :  
- Entrée :  
  ```plaintext
  Hello, World!
  ```
- Clé utilisée : `3`  
- Sortie :  
  ```plaintext
  %/EEH0d;HKE?e}
  ```

### 2. Déchiffrement par Force Brute :  
```bash
Clé 0: %/EEH0d;HKE?e}
Clé 1: $?DDGzc|GJD>d{
Clé 2: #>CCFyb}FIC<c]
Clé 3: @<BBExa{EHB.b[
...
Clé 60: Hello, World!  <--
Clé 61: Gdkkn'9Vnqkc T
...
Clé 92: ^`FFI1e:ILF/f|
```

### 3. Chiffrement de Fichier :  
- Télécharger un fichier `.txt`, le chiffrer avec une clé choisie et récupérer le fichier chiffré.  

---

## 📸 **Aperçu du Projet**  

### 🔡 Chiffrement de Messages  
![Message Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/mess01.png)
![Message Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/mes02.png)
![Message Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/mes03.png)

### 📁 Chiffrement de Fichiers  
![File Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/file01.png)
![File Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/file02.png)
![File Encryption](https://github.com/Sunnoogo77/file-text-encryptor/blob/b4e1f67c5b4e1505b59dd567b2d92f4cfdba5135/img/file03.png)


---

## 🛡️ **Sécurité**  

Le projet utilise des clés de chiffrement stockées localement. Assurez-vous de ne pas exposer ces clés publiquement pour éviter tout risque de sécurité.

---

## 👤 **Auteur**  

Projet développé par **[Sunnoogo Caleb Tapsoba](https://github.com/Sunnoogo77)**.  

- [LinkedIn](https://www.linkedin.com/in/sunnoogo-caleb-tapsoba-130584292/)  
- [GitHub](https://github.com/Sunnoogo77)  

---

## ⚖️ **Licence**  

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.  
