const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connection made');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThought(10);

    for (let i = 0; i < 20; i++) {
      const Name = getRandomName();
      const Email = getRandomEmail();

  users.push({
    Name,
    Email,
    age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
  });
}

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // We must create application answers for each saved application and insert them when we iterate through the saved applications.
  console.table(users);
  console.table(thoughts);
  console.info('Seeding has been complete!');
  process.exit(0);
});