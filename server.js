const express = require('express');
const Gun = require('gun');

const PORT = process.env.PORT || 8765;
const app = express();

// CORS - allow your Vercel frontend to connect
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// Health check so Render doesn't think it's dead
app.get('/', (req, res) => res.send('Aero Relay OK'));
app.get('/health', (req, res) => res.send('ok'));

app.use(Gun.serve);
const server = app.listen(PORT, () => console.log('Aero relay on port ' + PORT));
Gun({ web: server });
