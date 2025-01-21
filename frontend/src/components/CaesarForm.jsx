// import React, { useState } from 'react';
// import { encryptMessage, decryptMessage } from '../services/cipherAPI';

// const CaesarForm = () => {
//     const [encryptMessage, setEncryptMessage] = useState('');
//     const [encryptKey, setEncryptKey] = useState('');
//     const [decryptMessage, setDecryptMessage] = useState('');
//     const [decryptKey, setDecryptKey] = useState('');
//     const [result, setResult] = useState('');
//     const [bruteForceResults, setBruteForceResults] = useState([]);

//     const handleEncrypt = () => {
//         const encrypted = encryptMessage(encryptMessage, encryptKey);
//         setResult(encrypted);
//     }

//     const handleDecrypt = () => {
//         const decrypted = decryptMessage(decryptMessage, decryptKey);
//         setResult(decrypted);
//     }



//     return (
//         <div className="container mx-auto p-4">
//             <div className='flex justify-center'>
//                 <div className="w-full max-w-full mb-10 pt-5 pb-7 pr-10 pl-10 bg-slate-50 shadow-md rounded-lg">
//                     <h2 className="text-2xl font-bold mb-4 text-center">Bienvenue dans notre application du Chiffrement César</h2>
//                     <p className="mb-2 text-justify">Le chiffrement de César est une technique de chiffrement très simple. Il s'agit de décaler chaque lettre du message d'un certain nombre de positions dans l'alphabet. Par exemple, avec un décalage de 3, A devient D, B devient E, etc.</p>
//                     <p className="mb-2 text-justify">Entrez un message et une clé (optionnelle) pour chiffrer ou déchiffrer un message. Si vous ne connaissez pas la clé, vous pouvez utiliser la force brute pour trouver toutes les combinaisons possibles.</p>
//                 </div>
//             </div>
            
//             <div className="flex justify-center ">
//                 <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg">
//                     <h3 className="text-xl font-semibold mb-2 text-center">Chiffrement</h3>
//                     <p className="text-center">Entrez le message à chiffrer et la clé (optionnelle) :</p>
//                     <input
//                         className="border p-2 mb-2 w-full"
//                         id='crypMessage'
//                         type="text"
//                         value={encryptMessage}
//                         onChange={(e) => setEncryptMessage(e.target.value)}
//                     />
//                     <input
//                         className="border p-2 mb-2 w-full"
//                         type="number"
//                         value={encryptKey}
//                         onChange={(e) => setEncryptKey(e.target.value)}
//                     />
//                     <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleEncrypt}>Chiffrer</button>
//                 </div>

//                 <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg ml-20">
//                     <h3 className="text-xl font-semibold mb-2 text-center">Déchiffrement</h3>
//                     <p className="text-center">Entrez le message à déchiffrer et la clé (optionnelle):</p>
//                     <input
//                         type="text"
//                         className="border p-2 mb-2 w-full"
//                         placeholder="Entrez le message"
//                         value={decryptMessage}
//                         onChange={(e) => setDecryptMessage(e.target.value)}
//                     />
//                     <input
//                         type="number"
//                         className="border p-2 mb-2 w-full"
//                         placeholder="Entrez la clé (optionnelle)"
//                         value={decryptKey}
//                         onChange={(e) => setDecryptKey(e.target.value)}
//                     />
//                     <button className="bg-green-500 text-white p-2 rounded w-full" onClick={handleDecrypt}>Déchiffrer</button>
//                 </div>
//             </div>

//             <div className="w-full max-w-full mt-7 mb-10 pt-5 pb-7 pr-10 pl-10 bg-slate-50 shadow-md rounded-lg">
//                 {result && <p className="text-center text-lg">{result}</p>}
//                 {bruteForceResults.length > 0 && (
//                     <div>
//                         <h4 className="text-lg font-semibold mb-2 text-center">Résultats de la force brute :</h4>
//                         <ul className="list-disc list-inside">
//                             {bruteForceResults.map((res, index) => (
//                                 <li key={index}>{res}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CaesarForm;




import React, { useState } from 'react';
import { encryptMessage, decryptMessage } from '../services/cipherAPI';


const CaesarForm = () => {
    const [encryptText, setEncryptText] = useState('');
    const [encryptKey, setEncryptKey] = useState('');
    const [decryptText, setDecryptText] = useState('');
    const [decryptKey, setDecryptKey] = useState('');
    const [result, setResult] = useState('');
    const [bruteForceResults, setBruteForceResults] = useState([]);

    // Fonction pour gérer le chiffrement
    const handleEncrypt = async () => {
        if (!encryptText.trim()) {
            setResult("Veuillez entrer un message à chiffrer.");
            return;
        }
        
        try {
            const keyToSend = encryptKey ? Number(encryptKey) : null;
            const response = await encryptMessage(encryptText, keyToSend);
            setResult(`Message chiffré : ${response.data.encrypted} (Clé : ${response.data.key})`);
        } catch (error) {
            setResult("Erreur lors du chiffrement. Veuillez réessayer.");
        }
    };

    // Fonction pour gérer le déchiffrement
    const handleDecrypt = async () => {
        if (!decryptText.trim()) {
            setResult("Veuillez entrer un message à déchiffrer.");
            return;
        }

        try {
            const keyToSend = decryptKey ? Number(decryptKey) : null;
            const response = await decryptMessage(decryptText, keyToSend);

            if (keyToSend !== null) {
                setResult(`Message déchiffré : ${response.data.decrypted}`);
            } else {
                setBruteForceResults(response.data.brute_force_results);
                setResult('');
            }
        } catch (error) {
            console.error(error);
            setResult("Erreur lors du déchiffrement. Veuillez réessayer.");
        }
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
                {/* Bloc de chiffrement */}
                <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-center">Chiffrement</h3>
                    <p className="text-center">Entrez le message à chiffrer et la clé (optionnelle) :</p>
                    <input
                        className="border p-2 mb-2 w-full"
                        type="text"
                        placeholder="Entrez le message"
                        value={encryptText}
                        onChange={(e) => setEncryptText(e.target.value)}
                    />
                    <input
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

                {/* Bloc de déchiffrement */}
                <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg ml-20">
                    <h3 className="text-xl font-semibold mb-2 text-center">Déchiffrement</h3>
                    <p className="text-center">Entrez le message à déchiffrer et la clé (optionnelle):</p>
                    <input
                        type="text"
                        className="border p-2 mb-2 w-full"
                        placeholder="Entrez le message"
                        value={decryptText}
                        onChange={(e) => setDecryptText(e.target.value)}
                    />
                    <input
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

            {/* Section des résultats */}
            <div className="w-full max-w-full mt-7 mb-10 pt-5 pb-7 pr-10 pl-10 bg-slate-50 shadow-md rounded-lg">
                {result && <p className="text-center text-lg">{result}</p>}
                {bruteForceResults.length > 0 && (
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Résultats de la force brute :</h4>
                        <ul className="list-disc list-inside">
                            {bruteForceResults.map((res, index) => (
                                <li key={index}><strong>Clé {res.key}:</strong> {res.decrypted_text}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaesarForm;
