import React, { useState } from "react";
import { uploadFile } from "../services/fileAPI";

const FileEncryptForm = () => {
    const [file, setFile] = useSate(null);
    const [message, setMessage] = useState('');

    const handleUpload = async (route) => {
        if(!file){
            setMessage('Veuillez sélectionner un fichier');
            return;
        }

        const result = await uploadFile(File, route);
        setMessage(result.message || 'Erreur lors du traitement');
    };

    return(
        <div className="container mx-auto p-4">
            <h2 className="tex-xl font-bold mb-4">Chiffrement / Déchiffrement de fichier</h2>
            <input
            type="file"
            conChange={(e) => setFile(e.target.files[0])}
            />
            <button
            onClick={() => handleUpload('encrypt-file')}
            className="bg-blue-500 text-white p-2 m-2 rounded">
                Chiffrer
            </button>
            <button
            onClick={() => handleUpload('decrypt-file')}
            className="bg-green-500 text-white p-2 rounded">
                Déchiffrer
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileEncryptForm