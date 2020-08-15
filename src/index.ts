'use strict';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('INDEX');
})


app.get('/add', (req, res) => {
  console.log('GOTO /add')

  // client.connect(() => {
  //   console.log('connected')
  // })

  res.send('/ADD')


})
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`)
})
