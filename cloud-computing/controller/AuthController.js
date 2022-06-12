const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const fs = require('fs');
const db = require('../config/database');
const path = require('path');
const conPrivate = path.join(__dirname, '../config/private.pem');

const pool = new Pool(db);

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );

    const privateKey = fs.readFileSync(conPrivate, 'utf8');
    const token = jwt.sign({ user: user.rows[0] }, privateKey, { algorithm: 'HS256'});
  
    res.status(200)
      .contentType('application/json')
      .json({
        status: 'success',
        data: {
          user: user.rows[0],
          token
        },
      });
  } catch (err) {
    res.status(400)
      .contentType('application/json')
      .json({
        status: err.name,
        message: err.message,
      });
  }
};

const registration = async (req, res) => {
  try {
    const { name, email, password, gender, date_birth, city } = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, email, password, gender, date_birth, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [name, email, password, gender, date_birth, city]);

    res.status(201)
    .contentType('application/json')
    .json({
      status: 'success',
      message: 'registration successful',
      // data: result.rows[0].id,
    });
  } catch (err) {
    res.status(400)
      .contentType('application/json')
      .json({ 
        status: err.name,
        message: err.message
      });
  }
};

const getRegisterUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.status(200).json({ 
      status: 'success',
      data: results.rows
    });
  } catch (err) {
    res.status(400)
      .contentType('application/json')
      .json({ 
        status: err.name,
        message: err.message
      });
  }
};

module.exports = {
  login,
  registration,
  getRegisterUserById
};