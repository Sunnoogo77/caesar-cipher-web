import React, { useState } from 'react';
import { encryptMessage, decryptMessage } from '../services/cipherAPI';

const CaesarForm = () => {
    const [encryptText, setEncryptText] = useState('');
    const [encryptKey, setEncryptKey] = useState('');
    const [decryptText, setDecryptText] = useState('');
    const [decryptKey, setDecryptKey] = useState('');
    const [result, setResult] = useState('');
    const [resultKey, setResultKey] = useState('');
    const [bruteForceResults, setBruteForceResults] = useState([]);

    const handleEncrypt = async () => {
        if (!encryptText.trim()) {
            setResult("Veuillez entrer un message à chiffrer.");
            return;
        }
        
        try {
            const keyToSend = encryptKey ? Number(encryptKey) : null;
            const response = await encryptMessage(encryptText, keyToSend);
            setResultKey(response.data.key)
            setResult(`${response.data.encrypted}}`);
        } catch (error) {
            setResult("Erreur lors du chiffrement. Veuillez réessayer.");
        }
    };

    const handleDecrypt = async () => {
        if (!decryptText.trim()) {
            setResult("Veuillez entrer un message à déchiffrer.");
            return;
        }

        try {
            const keyToSend = decryptKey ? Number(decryptKey) : null;
            const response = await decryptMessage(decryptText, keyToSend);

            if (keyToSend !== null) {
                setResult(`${response.data.decrypted}`);
            } else {
                setBruteForceResults(response.data.brute_force_results);
                setResult('');
            }
        } catch (error) {
            setResult("Erreur lors du déchiffrement. Veuillez réessayer.");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
        alert('Message copié dans le presse-papier !');
    };

    return (
        <div className="container mx-auto p-4">
            <div className='flex justify-center'>
                <div className="w-full max-w-full mb-10 pt-5 pb-7 pr-10 pl-10 bg-slate-50 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Bienvenue dans notre application du Chiffrement César</h2>
                    <p className="mb-2 text-justify">Le chiffrement de César est une technique de chiffrement très simple. Il s'agit de décaler chaque lettre du message d'un certain nombre de positions dans l'alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.</p>
                    <p className="mb-2 text-justify">Entrez un message et une clé (optionnelle) pour chiffrer ou déchiffrer un message. Si vous ne connaissez pas la clé, vous pouvez utiliser la force brute pour trouver toutes les combinaisons possibles.</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-center">Chiffrement</h3>
                    <input
                        id='input1'
                        className="border p-2 mb-2 w-full"
                        type="text"
                        placeholder="Entrez le message"
                        value={encryptText}
                        onChange={(e) => setEncryptText(e.target.value)}
                    />
                    <input
                    id='input2'
                        className="border p-2 mb-2 w-full"
                        type="number"
                        placeholder="Clé (optionnelle)"
                        value={encryptKey}
                        onChange={(e) => setEncryptKey(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleEncrypt}>
                        Chiffrer
                    </button>
                </div>

                <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg ml-20">
                    <h3 className="text-xl font-semibold mb-2 text-center">Déchiffrement</h3>
                    <input
                    id='input3'
                        type="text"
                        className="border p-2 mb-2 w-full"
                        placeholder="Entrez le message"
                        value={decryptText}
                        onChange={(e) => setDecryptText(e.target.value)}
                    />
                    <input
                    id='input4'
                        type="number"
                        className="border p-2 mb-2 w-full"
                        placeholder="Clé (optionnelle)"
                        value={decryptKey}
                        onChange={(e) => setDecryptKey(e.target.value)}
                    />
                    <button className="bg-green-500 text-white p-2 rounded w-full" onClick={handleDecrypt}>
                        Déchiffrer
                    </button>
                </div>
            </div>
            
            {result && (
                <div className="max-w-screen-xl flex mt-10 p-5 bg-gray-900 rounded-lg text-white  shadow-lg">
                    <button 
                        className="mr-10 top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded text-sm"
                        onClick={handleCopy}
                    >
                        Copier
                    </button>
                    <div className='p-3 mr-5'>
                        <h4 className='text-lg font-semibold mb-2'>_KEY_:_{resultKey}_</h4>
                    </div>
                    <div className='p-1 mr-3'>
                        <h4 className="text-lg font-semibold mb-2 mr-2">Résultat:</h4>
                    </div>
                    <pre className=" overflow-x-auto p-2 mr-5 bg-gray-800 rounded-lg text-green-400">
                        <code>{result}</code>
                    </pre>
                </div>
            )}

            {bruteForceResults.length > 0 && (
                <div className="mt-7 p-5 bg-gray-900 text-white rounded-lg shadow-lg">
                    <h4 className="text-lg font-semibold mb-2 text-center">Résultats de la force brute :</h4>
                    <ul className="list-none text-green-400">
                        {bruteForceResults.map((res, index) => (
                            <li key={index}>
                                <pre className="mb-2 bg-gray-800 rounded-lg p-2 overflow-x-auto">
                                    <code>Clé {res.key}: {res.decrypted_text}</code>
                                </pre>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CaesarForm;
