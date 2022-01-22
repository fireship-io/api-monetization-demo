const { randomBytes } = require('crypto');
const hashAPIKey = require('./hashAPIKey');

// Recursive function to generate a unique random string as API key
function generateAPIKey() {
    const apiKey = randomBytes(16).toString('hex');
    const hashedAPIKey = hashAPIKey(apiKey);
  
    // Ensure API key is unique
    if (apiKeys[hashedAPIKey]) {
      generateAPIKey();
    } else {
      return { hashedAPIKey, apiKey };
    }
  }

  module.exports = generateAPIKey;
  