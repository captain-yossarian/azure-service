'use strict'
import express from 'express'
import { client } from './cosmos';
import typescript, { CompilerOptions } from 'typescript';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let app = express();


const insert = (id: number, photo_id: string, quantity: number) => {
  const arr = [
    `INSERT INTO likes.user_likes (id, photo_id, quantity) VALUES (${id}, \'${photo_id}\', ${quantity})`,
  ];
  arr.forEach(element => {
    client.execute(element);
  });

}

app.get('/', (req, res) => {
  res.send('ADD ROUTING');
})


app.get('/add', (req, res) => {
  console.log('GOTO /add')

  client.connect(() => {
    console.log('connected')
  })

  res.send('ADD ROUTING')


})
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`)
})
