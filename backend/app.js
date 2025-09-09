const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Default root route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
