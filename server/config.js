// server/config.js

module.exports = {
  database: {
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'ai_nexus_db',
  },
  api: {
    port: 3000,
  },
  websocket: {
    port: 4000,
  },
};

