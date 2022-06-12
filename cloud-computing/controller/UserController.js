const { Pool } = require('pg');
const db = require("../config/database");

const pool = new Pool(db);

const getUser = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM users ORDER BY id ASC');

    res.status(200)
      .contentType('application/json')
      .json({ 
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

const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    res.status(200)
      .contentType('application/json')
      .json({ status: 'success', data: results.rows });
  } catch (err) {
    res.status(400)
      .contentType('application/json')
      .json({
        status: err.name,
        message: err.message
      });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
      [name, email]);

    res.status(201)
      .contentType('application/json')
      .json({
        status: 'success',
        data: result.rows[0].id,
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

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body;
  
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id]);

    res.status(200)
      .contentType('application/json')
      .json({
        status: 'success',
        message: `User modified with ID: ${id}`,
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

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);

    res.status(200)
      .contentType('application/json')
      .json({
        status: 'success',
        message: `User deleted with ID: ${id}`,
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
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
