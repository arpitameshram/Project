const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Helper functions to read and save users
async function getUsers() {
  try {
    const rawFileContent = await fs.readFile('data/users.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.users || [];
  } catch (error) {
    console.error('Error reading users:', error.message);
    return [];
  }
}

async function saveUsers(users) {
  try {
    await fs.writeFile('data/users.json', JSON.stringify({ users }));
  } catch (error) {
    console.error('Error saving users:', error.message);
  }
}

// CRUD operations

// Create (register) a new user
app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate the request data (add more validation as needed)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Incomplete registration data' });
  }

  // Check if the email is already registered
  const existingUsers = await getUsers();
  const isEmailTaken = existingUsers.some((user) => user.email === email);

  if (isEmailTaken) {
    return res.status(400).json({ error: 'Email is already registered' });
  }

  // Create a new user
  const newUser = {
    id: Math.random().toString(),
    firstName,
    lastName,
    email,
    password, // In a real application, you should hash the password
  };

  // Save the new user
  existingUsers.push(newUser);
  await saveUsers(existingUsers);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Read all users
app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.json({ users });
});

// Read a specific user by ID
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const users = await getUsers();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ user });
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, password } = req.body;

  const users = await getUsers();
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update the user
  users[userIndex] = {
    ...users[userIndex],
    firstName,
    lastName,
    email,
    password, // In a real application, you should hash the new password
  };

  // Save the updated users array
  await saveUsers(users);

  res.json({ message: 'User updated successfully', user: users[userIndex] });
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const users = await getUsers();
  const updatedUsers = users.filter((user) => user.id !== userId);

  if (updatedUsers.length === users.length) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Save the updated users array
  await saveUsers(updatedUsers);

  res.json({ message: 'User deleted successfully' });
});

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
