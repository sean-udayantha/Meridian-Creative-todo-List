const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
