const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Get request was made.')
  res.send('Wonderwoman.')
})

const PORT = 2222;

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests at port ${PORT}.`)
});