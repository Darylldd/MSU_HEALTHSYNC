const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const patientRoutes = require('./routes/patientRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});


app.use('/admin', adminRoutes);
app.use('/patients', patientRoutes);
app.use('/medicines', medicineRoutes);
app.use('/services', serviceRoutes);

app.listen(3000, () => {
  console.log('Connected to http://localhost:3000');
});