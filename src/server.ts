import express from 'express';

const app = express();

app.use(express.json());

interface UserPorps {
  id: number;
  name: string;
  age: number;
}

const users: UserPorps[] = [
  {id: 1, name: 'Adriano', age: 47},
  {id: 2, name: 'Cristian', age: 14},
  {id: 3, name: 'Grace', age: 18}
]


app.get("/users", (request, response) => {
  return response.json(users);
})

app.post("/users", (request, response) => {
  const body = request.body

  console.log(body)


  return response.json(body);
})

app.put("/users/:id", (request, response) => {
  const { id } = request.params;

  console.log(id)

  const body = request.body;

  console.log(body)

  
  return response.json(body);
})

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;
  console.log(id)
  return response.json(id);
})



app.listen(3333, () => console.log('Server is running!'))