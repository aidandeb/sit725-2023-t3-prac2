const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define the port to listen on

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1 || 0);
  const num2 = parseFloat(req.query.num2 || 0);
  const result = num1 + num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
