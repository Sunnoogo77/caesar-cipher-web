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
        <h2>Chiffrement César</h2>
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
        <button onClick={handleDecrypt}>Déchiffrer</button>

        {result && <p>{result}</p>}

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
