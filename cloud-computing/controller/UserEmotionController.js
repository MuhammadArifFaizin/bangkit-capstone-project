const { Pool } = require('pg');
const db = require("../config/database");

const pool = new Pool(db);

const getAllEmotionByUserId = (req, res) => {
  const id = parseInt(req.params.id, 10);
  pool.query(
    'SELECT a.id, b.name, c.name as emotion, c.title, c.description, a.created_at FROM users_emotions as a JOIN users as b ON a.id_user = b.id JOIN emotions as c ON a.id_emotion = c.id WHERE b.id = $1 ORDER BY a.created_at ASC',
    [id],
    (err, results) => {
    if (err) {
      res.status(400)
        .contentType('application/json')
        .json({ status: err.name, message: err.message });
    } else {
      res.status(200)
        .contentType('application/json')
        .json({ status: 'success', data: results.rows });
    }
  });
};

const getEmotionById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  pool.query(
    'SELECT a.id, b.name as emotion, b.title, b.description, a.created_at FROM users_emotions as a JOIN emotions as b ON a.id_emotion = b.id WHERE a.id = $1',
    [id],
    (err, results) => {
    if (err) {
      res.status(400)
        .contentType('application/json')
        .json({ status: err.name, message: err.message });
    } else {
      res.status(200)
        .contentType('application/json')
        .json({ status: 'success', data: results.rows[0] });
    }
  });
};

const createEmotion = async (req, res) => {
  const { id, audio } = req.body;

  try{
    const emotion = await pool.query(
      'SELECT * FROM emotions WHERE name like $1',
      [audio]
    );
    
    pool.query(
      'INSERT INTO users_emotions (id_user, id_emotion) VALUES ($1, $2) RETURNING id',
      [id, emotion.rows[0].id],
      (err, results) => {
        if (err) {
          res.status(400)
            .contentType('application/json')
            .json({ status: err.name, message: err.message });
        } else {
          res.status(201)
            .contentType('application/json')
            .json({
              status: 'success',
              data: {
                id: results.rows[0].id,
                emotion: emotion.rows[0]
              },
            });
        }
      },
    );

  } catch (err) {
    res.status(400)
      .contentType('application/json')
      .json({ status: err.name, message: err.message });
  }
};

const deleteEmotion = (req, res) => {
  const id = parseInt(req.params.id, 10);

  pool.query('DELETE FROM emotions WHERE id = $1', [id], (err) => {
    if (err) {
      res.status(400)
        .contentType('application/json')
        .json({ status: err.name, message: err.message });
    } else {
      res.status(200)
        .contentType('application/json')
        .json({
          status: 'success',
          message: `Emotion deleted with ID: ${id}`,
        });
    }
  });
};

module.exports = {
  getAllEmotionByUserId,
  getEmotionById,
  createEmotion,
  deleteEmotion
};