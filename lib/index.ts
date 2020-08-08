'use strict'
import express from 'express'
import { client } from './cosmos';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let app = express();


app.get('/', (req, res) => {
  console.log('posrt', process.env.port, process.env.PORT)
  res.send('hello')
})

const insert = (id: number, photo_id: string, quantity: number) => {
  const arr = [
    `INSERT INTO likes.user_likes (id, photo_id, quantity) VALUES (${id}, \'${photo_id}\', ${quantity})`,
  ];
  arr.forEach(element => {
    client.execute(element);
  });

}

app.get('/add', (req, res) => {
  console.log('GOTO /add')

  client.connect(() => {

    console.log('connect');
    insert(2, '15', 14);

  })


})

const server = app.listen(process.env.port, () => {
  console.log(`server running at port http://localhost:${process.env.port}`)
})
