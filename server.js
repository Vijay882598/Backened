// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors(
//     {origin:'*'}
// ));
// app.use(express.json());
// app.listen(5000, () => console.log('Server running on port 5000'));
// app.use(require('./routes/employee.routes'))
// mongoose.connect(
//     'mongodb+srv://vijaysharma72745_db_user:QqbpFI2bMejf4NFR@cluster0.nshj4ql.mongodb.net/EmployeesData'
// ).then(()=> console.log('MongoDB Connected'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// app.use(cors({ origin: '*' }));
app.use(cors({
  origin: [
    'https://employee-fronted.vercel.app',
    'http://localhost:4200'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend API is running 🚀');
});

app.use('/api/employees', require('./routes/employee.routes'));

mongoose.connect(
  'mongodb+srv://vijaysharma72745_db_user:QqbpFI2bMejf4NFR@cluster0.nshj4ql.mongodb.net/EmployeesData'
).then(() => console.log('MongoDB Connected'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
