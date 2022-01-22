const { createHash } = require('crypto');

// Hash the API key
function hashAPIKey(apiKey) {
  
    const hashedAPIKey = createHash('sha256').update(apiKey).digest('hex');
  
    return hashedAPIKey;
  }

  module.exports = hashAPIKey;