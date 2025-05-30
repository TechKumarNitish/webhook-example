const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook/enroll', (req, res) => {
  console.log('Received event:', JSON.stringify(req.body, null, 2));
  // Add your custom logic here (e.g. send email, call other APIs)

  // Respond 200 to acknowledge Hasura
  res.status(200).json({ message: 'Event received' });
});

app.post('/register', async (req, res) => {
  const { name, email } = req.body.input;

  // Run custom logic (DB check, logging, validations)
  const student_id = `sid_${Math.floor(Math.random() * 10000)}`;

  res.json({ student_id });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});
