const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="background-color:powderblue;">Express Demo App</h1>  <h2 style="color:blue;">Congratulations!!</h1> <h4 style="color:red;">Message: Success</h4> <p style="color:green;">Version 1.2</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])

})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
