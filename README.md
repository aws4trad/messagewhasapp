# WhatsApp Business API Example

This repository demonstrates how to send a WhatsApp message using your verified phone number and the WhatsApp Business API.

## Requirements
- Node.js installed
- WhatsApp Business API credentials
- Your phone number must be verified

## Setup
1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update `send_message.js`:
   - Replace `your-whatsapp-api-endpoint` with your actual API endpoint.
   - Replace `YOUR_API_TOKEN` with your actual token.
4. Run the script:
   ```bash
   node send_message.js
   ```

## Files
- `whatsapp_account_verification.json`: Your verified number and certificate info.
- `send_message.js`: Example Node.js script to send a WhatsApp message.

## Troubleshooting
- If you encounter issues, double-check your endpoint and token.
- Your number must be verified and enabled for API use.

If you need more help, just ask in an issue or contact support.
