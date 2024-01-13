const express = require("express")
const session = require('express-session');
const app = express()
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser());

app.use(session({
    secret: 'pose-gen',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')

const PORT = 8000

// routes
const PageRoutes = require('./routes/pageRoutes')
const authRoutes = require('./routes/authRoutes');

app.use('/',PageRoutes)
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))