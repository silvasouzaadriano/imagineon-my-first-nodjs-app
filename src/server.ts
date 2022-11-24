import express from 'express';
import uuid, { v4 } from 'uuid';

const app = express();

app.use(express.json());

interface UserPorps {
  id?: string;
  name: string;
  age: number;
}

const users: UserPorps[] = []


app.get("/users", (request, response) => {
  return response.json(users);
})

app.post("/users", (request, response) => {
  const {name, age} = request.body

  users.push({
    id: v4(),
    name,
    age
  })

  return response.json(users);
})

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const {name, age } = request.body;

  const user = users.find(user => user.id === id);

  if (!user) {
    return response.status(400).json({error: "User does not exists!"})
  }

  user.name = name;
  user.age = age;
  
  return response.json(user);
})

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === id);

  users.splice(user, 1)
  
  return response.json(id);
})





app.listen(3333, () => console.log('Server is running!'))