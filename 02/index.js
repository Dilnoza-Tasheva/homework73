const express = require('express');

const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'Mordor';

app.get('/encode/:userText', (req, res) => {
    const textToCipher = req.params.userText;
    const cipheredText = Vigenere.Cipher(password).crypt(textToCipher);
    return res.send(cipheredText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});