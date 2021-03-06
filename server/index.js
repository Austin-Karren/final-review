require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      authCtrl = require('./controllers/authController'),
      mainCtrl = require('./controllers/mainController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
}).then(db => {
   app.set('db', db);
   console.log('db connected');
   app.listen(port, () => console.log(`Server running on ${port}`));
})

//products endpoints
app.get('/api/product', mainCtrl.getProducts);