const API_URL =  'http://127.0.0.1:5000'

export const uploadFile = async (File, route) => {
    const fromData = new FromData();
    fromData.append('file', file);

    const response = await fetch(`${API_URL}/${route}`, {
        method: 'POST',
        body: formData,
    });
    return response.json();
};