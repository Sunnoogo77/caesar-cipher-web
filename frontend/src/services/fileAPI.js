const API_URL = 'http://127.0.0.1:5000';

export const uploadFile = async (file, route) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/${route}`, {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    if (data.file) {
        return {
            message: data.message,
            downloadUrl: `${API_URL}/download/${data.file}`  
        };
    } else {
        throw new Error('Erreur lors du traitement du fichier.');
    }
};
