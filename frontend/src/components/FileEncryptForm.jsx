import React, { useState } from 'react';
import { uploadFile } from '../services/fileAPI';

const FileEncryptForm = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleUpload = async (route) => {
        if (!file) {
            setMessage('Veuillez sélectionner un fichier');
            return;
        }
        
        try {
            const result = await uploadFile(file, route);
            setMessage(result.message);
            setDownloadUrl(result.downloadUrl);
        } catch (error) {
            setMessage('Erreur lors du traitement du fichier.');
        }
    };

    return (
        <div className="container  mx-auto p-4 w-full max-w-full mb-10 pt-5 pb-7 pr-20 pl-20 bg-slate-50 shadow-md rounded-lg">

            {/* <input 
                type="file" 
                onChange={(e) => setFile(e.target.files[0])} 
                className="border p-2 w-full mb-2"
            /> */}
            
            <div class="flex items-center justify-center mt-7 w-full mb-5">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-8/12 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8/12 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input id="dropzone-file" type="file" onChange={(e) => setFile(e.target.files[0])} class="hidden" />
                </label>
            </div> 


            <div className="flex ml-72 mb-5 flex-nowrap space-x-20">
                <button 
                    onClick={() => handleUpload('encrypt-file')} 
                    className="bg-blue-500 text-white ml-36 p-3 pr-20 pl-20 rounded">
                    Chiffrer
                </button>
                <button 
                    onClick={() => handleUpload('decrypt-file')} 
                    className="bg-green-500 text-white p-3 pr-20 pl-20 rounded">
                    Déchiffrer
                </button>
            </div>

            {message && <p className="mt-4 text-center mb-2 text-lg font-semibold">{message}</p>}

            {downloadUrl && (
                <div className="ml-96 w-5/12 mt-4 mb-5 pb-5 text-center bg-gray-200 p-4 rounded">
                    <p className="mb-2 text-lg font-semibold">Votre fichier est disponible ici :</p>
                    <a 
                        href={downloadUrl} 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        download>
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Télécharger</span>
                    </a>
                </div>
                
            )}

        </div>
    );
};

export default FileEncryptForm;
