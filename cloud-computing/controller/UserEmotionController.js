const { Pool } = require('pg');
const db = require("../config/database");

const pool = new Pool(db);

const getAllEmotionByUserId = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const results = await pool.query(
      'SELECT a.id, b.name, c.name as emotion, c.title, c.description, a.created_at FROM users_emotions as a JOIN users as b ON a.id_user = b.id JOIN emotions as c ON a.id_emotion = c.id WHERE b.id = $1 ORDER BY a.created_at ASC',
      [id]);

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

const getEmotionById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const results = await pool.query(
      'SELECT a.id, b.name as emotion, b.title, b.description, a.created_at FROM users_emotions as a JOIN emotions as b ON a.id_emotion = b.id WHERE a.id = $1',
      [id]);

      res.status(200)
        .contentType('application/json')
        .json({ 
          status: 'success',
          data: results.rows[0]
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

const createEmotion = async (req, res) => {
  try{
    const { id, audio } = req.body;
    const emotion = await pool.query(
      'SELECT * FROM emotions WHERE name like $1',
      [audio]
    );
    
    const results = await pool.query(
      'INSERT INTO users_emotions (id_user, id_emotion) VALUES ($1, $2) RETURNING id',
      [id, emotion.rows[0].id]);

    res.status(201)
      .contentType('application/json')
      .json({
        status: 'success',
        data: {
          id: results.rows[0].id,
          emotion: emotion.rows[0]
        },
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

const deleteEmotion = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query('DELETE FROM emotions WHERE id = $1', [id]);

    res.status(200)
      .contentType('application/json')
      .json({
        status: 'success',
        message: `Emotion deleted with ID: ${id}`,
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
  getAllEmotionByUserId,
  getEmotionById,
  createEmotion,
  deleteEmotion
};