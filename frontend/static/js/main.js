async function callApi(endpoint, data) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response.json();
}

document.getElementById("encrypt-btn").addEventListener("click", async () => {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const result = await callApi("/encrypt", { message, key: key ? parseInt(key) : null });
    document.getElementById("output").textContent = `Encrypted Message: ${result.encrypted_message}, Key: ${result.key}`;
});

document.getElementById("decrypt-btn").addEventListener("click", async () => {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const result = await callApi("/decrypt", { message, key: parseInt(key) });
    document.getElementById("output").textContent = `Decrypted Message: ${result.decrypted_message}`;
});

document.getElementById("bruteforce-btn").addEventListener("click", async () => {
    const message = document.getElementById("message").value;
    const result = await callApi("/bruteforce", { message });
    const output = result.map(r => `Key: ${r.key}, Message: ${r.decrypted_message}`).join("\n");
    document.getElementById("output").textContent = output;
});
