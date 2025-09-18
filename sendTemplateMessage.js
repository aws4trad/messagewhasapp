const fs = require('fs');
const https = require('https');

const verification = JSON.parse(fs.readFileSync('whatsapp_account_verification.json', 'utf8'));

// Replace these with your actual WhatsApp Business API endpoint and credentials
const apiEndpoint = 'https://your-whatsapp-api-endpoint/messages';
const apiToken = 'YOUR_API_TOKEN';

// Example: sending a template message with media
const messageData = {
    to: `${verification.cc}${verification.phone_number}`,
    type: 'template',
    template: {
        name: 'hello_world', // Replace with your approved template name
        language: { code: 'en_US' },
        components: [
            {
                type: 'header',
                parameters: [
                    {
                        type: 'image',
                        image: { link: 'https://example.com/image.jpg' } // Replace with your media URL
                    }
                ]
            },
            {
                type: 'body',
                parameters: [
                    { type: 'text', text: 'John Doe' } // Example parameter
                ]
            }
        ]
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
