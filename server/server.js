const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('./routes/htmlRoutes')(app);

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`🌍 Now connected on port: ${PORT}`));