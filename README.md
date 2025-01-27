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
```plaintext
Clé 0: %/EEH0d;HKE?e}
Clé 1: $?DDGzc|GJD>d{
Clé 2: #>CCFyb}FIC<c]
Clé 3: @<BBExa{EHB.b[
Clé 4: !.AADwZ]DGA,a+
Clé 5:  ,~~CvY[CF~'Z=
Clé 6: 9'``BuX+BE`:Y_
Clé 7: 8://AtW=AD/;X-
Clé 8: 7;??~sV_~C?|W)
Clé 9: 6|>>`rU-`B>}V(
Clé 10: 5}<</qT)/A<{U*
Clé 11: 4{..?pS(?~.]T&
Clé 12: 3],,>oR*>`,[S^
Clé 13: 2[''<nQ&</'+R%
Clé 14: 1+::.mP^.?:=Q$
Clé 15: 0=;;,lO%,>;_P#
Clé 16: z_||'kN$'<|-O@
Clé 17: y-}}:jM#:.})N!
Clé 18: x){{;iL@;,{(M 
Clé 19: w(]]|hK!|']*L9
Clé 20: v*[[}gJ }:[&K8
Clé 21: u&++{fI9{;+^J7
Clé 22: t^==]eH8]|=%I6
Clé 23: s%__[dG7[}_$H5
Clé 24: r$--+cF6+{-#G4
Clé 25: q#))=bE5=])@F3
Clé 26: p@((_aD4_[(!E2
Clé 27: o!**-ZC3-+* D1
Clé 28: n &&)YB2)=&9C0
Clé 29: m9^^(XA1(_^8Bz
Clé 30: l8%%*W~0*-%7Ay
Clé 31: k7$$&V`z&)$6~x
Clé 32: j6##^U/y^(#5`w
Clé 33: i5@@%T?x%*@4/v
Clé 34: h4!!$S>w$&!3?u
Clé 35: g3  #R<v#^ 2>t
Clé 36: f299@Q.u@%91<s
Clé 37: e188!P,t!$80.r
Clé 38: d077 O's #7z,q
Clé 39: cz669N:r9@6y'p
Clé 40: by558M;q8!5x:o
Clé 41: ax447L|p7 4w;n
Clé 42: Zw336K}o693v|m
Clé 43: Yv225J{n582u}l
Clé 44: Xu114I]m471t{k
Clé 45: Wt003H[l360s]j
Clé 46: Vszz2G+k25zr[i
Clé 47: Uryy1F=j14yq+h
Clé 48: Tqxx0E_i03xp=g
Clé 49: SpwwzD-hz2wo_f
Clé 50: RovvyC)gy1vn-e
Clé 51: QnuuxB(fx0um)d
Clé 52: PmttwA*ewztl(c
Clé 53: Olssv~&dvysk*b
Clé 54: Nkrru`^cuxrj&a
Clé 55: Mjqqt/%btwqi^Z
Clé 56: Lipps?$asvph%Y
Clé 57: Khoor>#Zruog$X
Clé 58: Jgnnq<@Yqtnf#W
Clé 59: Ifmmp.!Xpsme@V
Clé 60: Hello, World!U <--
Clé 61: Gdkkn'9Vnqkc T
Clé 62: Fcjjm:8Umpjb9S
Clé 63: Ebiil;7Tloia8R
Clé 64: Dahhk|6SknhZ7Q
Clé 65: CZggj}5RjmgY6P
Clé 66: BYffi{4QilfX5O
Clé 67: AXeeh]3PhkeW4N
Clé 68: ~Wddg[2OgjdV3M
Clé 69: `Vccf+1NficU2L
Clé 70: /Ubbe=0MehbT1K
Clé 71: ?Taad_zLdgaS0J
Clé 72: >SZZc-yKcfZRzI
Clé 73: <RYYb)xJbeYQyH
Clé 74: .QXXa(wIadXPxG
Clé 75: ,PWWZ*vHZcWOwF
Clé 76: 'OVVY&uGYbVNvE
Clé 77: :NUUX^tFXaUMuD
Clé 78: ;MTTW%sEWZTLtC
Clé 79: |LSSV$rDVYSKsB
Clé 80: }KRRU#qCUXRJrA
Clé 81: {JQQT@pBTWQIq~
Clé 82: ]IPPS!oASVPHp`
Clé 83: [HOOR n~RUOGo/
Clé 84: +GNNQ9m`QTNFn?
Clé 85: =FMMP8l/PSMEm>
Clé 86: _ELLO7k?ORLDl<
Clé 87: -DKKN6j>NQKCk.
Clé 88: )CJJM5i<MPJBj,
Clé 89: (BIIL4h.LOIAi'
Clé 90: *AHHK3g,KNH~h:
Clé 91: &~GGJ2f'JMG`g;
Clé 92: ^`FFI1e:ILF/f|
```

### 3. Chiffrement de Fichier :  
- Télécharger un fichier `.txt`, le chiffrer avec une clé choisie et récupérer le fichier chiffré.  

---

## 📸 **Aperçu du Projet**  

### 🔡 Chiffrement de Messages  
![Message Encryption](.C:\Users\tapso\OneDrive - Efrei\Bureau\Cloud\ENcryption\mess01.png)

### 📁 Chiffrement de Fichiers  
![File Encryption](./screenshots/file-encryption.png)

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
