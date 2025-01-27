const express = require('express');
const app = express();

app.get('/ping',(req, res) =>{
  res.send('pong');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});