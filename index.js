const fs = require('fs');

const inputFileName = 'input.txt';
const outputFileName = `outputs/${Date.now()}.json`;

fs.readFile(inputFileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Dosya okunurken bir hata oluştu:', err);
        return;
    }

    const lines = data.split('\n');
    const words = lines.map(line => line.trim());

    fs.writeFile(outputFileName, JSON.stringify(words, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('JSON dosyası oluşturulurken bir hata oluştu:', err);
        } else {
            console.log('JSON dosyası başarıyla oluşturuldu:', outputFileName);
        }
    });
});
