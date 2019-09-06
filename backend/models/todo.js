const mongoose = require('mongoose');

const server = 'sandbox-0rmzk.mongodb.net';
const user = 'user_001';
const database = 'todo';
const password = 'VVFkTptXZ68s5LWw';

const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true})
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch(() => {
          console.warn('Something wrong happened')
        });

let TodoSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Todo', TodoSchema);
