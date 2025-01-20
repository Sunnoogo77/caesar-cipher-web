import React, { useState } from 'react';
import { encryptMessage, decryptMessage } from '../services/cipherAPI';

const CaesarForm = () => {
    const [message, setMessage] = useState('');
    const [key, setKey] = useState('');
    const [result, setResult] = useState('');
    const [bruteForceResults, setBruteForceResults] = useState([]);

    const handleEncrypt = async () => {
        const keyToSend = key ? Number(key) : null;
        const response = await encryptMessage(message, keyToSend);
        setResult(`Message chiffré : ${response.data.encrypted} (Clé : ${response.data.key})`);
    };

    const handleDecrypt = async () => {
        const keyToSend = key ? Number(key) : null;
        const response = await decryptMessage(message, keyToSend);
        if (keyToSend !== null) {
        setResult(`Message déchiffré : ${response.data.decrypted}`);
        } else {
        setBruteForceResults(response.data.brute_force_results);
        }
    };

    return (
        <div>
        <h2>bienvenue dans notre application du Chiffrement César</h2>
        <div className='flex items-baseline'>
            <div >
                <h3>Chiffrement</h3>
                <p>Le chiffrement de César est une technique de chiffrement très simple. Il s'agit de décaler chaque lettre du message d'un certain nombre de positions dans l'alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.</p>

                <input
                type="text"
                placeholder="Entrez le message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <input
                type="number"
                placeholder="Entrez la clé (optionnelle)"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                />

                <button onClick={handleEncrypt}>Chiffrer</button>
                {result && <p>{result}</p>}


            </div>
            <div>
                // Ici, je veux de sorte de le formulaire, sois de sorte a décripter les messages si une clé est donné, offrir aussi la possibilité de décripter le message sans la clé sauf que dans le deuxième cas il va falloir afficher les résultats de la force brute et il me faut une bonne disposition pour cela un bon frontend, je veux un bon tailwind aussi 
                <h3>Déchiffrement</h3>
                <input
                type="text"
                placeholder="Entrez le message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <input
                type="number"
                placeholder="Entrez la clé (optionnelle)"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                />
                <button onClick={handleDecrypt}>Déchiffrer</button>
                {result && <p>{result}</p>}</div>
            </div>

        {bruteForceResults.length > 0 && (
            <div>
                <h3>Résultats de la force brute :</h3>
                <ul>
                    {bruteForceResults.map((item) => (
                    <li key={item.key}>
                        <strong>Clé {item.key}</strong> : {item.decrypted_text}
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
};

export default CaesarForm;
