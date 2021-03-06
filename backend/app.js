const express    = require('express');
const app        = express();
const Todo       = require('./models/todo');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/api/todos', (req, res) => {
  Todo.find()
      .then(documents => {
        res.status(200)
           .json({
             message: 'Todos fetched successfully',
             todos:   documents
           })
      })
});

app.post('/api/todos', (req, res) => {
  if (!req.body) {
    return res.status(400)
              .send('Request body is missing!')
  }
  const todo = new Todo({
    name:        req.body.name,
    isCompleted: req.body.isCompleted
  });
  console.log(`todo`, todo);
  todo.save()
      .then(createdTodo => {
        res.status(201)
           .json({
             message:    'Todo created successfully',
             todoId:     createdTodo._id,
             todoEntity: createdTodo
           })
      })
      .catch(res.status(500))
});

app.patch('/api/todos/:id', (request, response) => {
  Todo.updateOne(
    { _id: request.params.id },
    { $set: { isCompleted: request.body.isCompleted } })
      .then(() => {
        response.status(200)
                .json({message: 'Updated successfully!', todoId: response.params})
      })
      .catch(response.status(500))
});

app.delete('/api/todos/:id', (req, res) => {
  Todo.deleteOne({_id: req.params.id})
      .then(() => {
        res.status(200)
           .json({
             message: 'Todo Deleted successfully'
           });
      });
});

app.listen(port, () => console.log(`Server has started on port ${port}`));
module.exports = app;
