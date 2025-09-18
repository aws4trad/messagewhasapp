const fs = require('fs');
const https = require('https');

const verification = JSON.parse(fs.readFileSync('whatsapp_account_verification.json', 'utf8'));

// Replace these with actual WhatsApp Business API endpoint and credentials
const apiEndpoint = 'https://your-whatsapp-api-endpoint/messages';
const apiToken = 'YOUR_API_TOKEN'; // You need to set up your API token

const messageData = {
    to: `${verification.cc}${verification.phone_number}`,
    type: 'text',
    text: {
        body: 'Hello from WhatsApp Business API!'
    }
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`
    }
};

const req = https.request(apiEndpoint, options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Response:', data);
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(JSON.stringify(messageData));
req.end();