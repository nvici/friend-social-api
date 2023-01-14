const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

// not required in order for the Express server to run. This merely serves to show which activity's server is active in the terminal.
const activity = cwd.includes('02-Challenge')
  ? cwd.split('/02-Challenge/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});