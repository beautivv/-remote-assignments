const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt'); // 引入加密庫



app.use(express.json());

const pool = mysql.createPool({
  host: 'assignment.cgffwdinaip3.ap-northeast-1.rds.amazonaws.com',
  user: 'Vivian',
  password: 'Appworks_2023',
  database: 'assignment'
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  // 密碼加密
  const hashedPassword = await bcrypt.hash(password, 10);

  // 正則表達式驗證
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z0-9]+$/;

  if (!emailRegex.test(email) || !nameRegex.test(name)) {
    return res.status(400).json({ error: 'Invalid email or name format' });
  }

  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    connection.release();
    res.status(200).json({
      data: {
        user: {
          id: results.insertId,
          name: name,
          email: email
        },
        'request-date': new Date().toUTCString()
      }
    });
  } catch (error) {
    console.error('Error inserting user: ' + error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users', async (req, res) => {
  const userId = req.query.id;

  // 正則表達式驗證
  const idRegex = /^[0-9]+$/;
  if (!idRegex.test(userId)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    connection.release();
    if (results.length === 0) {
      res.status(403).json({ error: 'User Not Existing' });
    } else {
      const user = results[0];
      res.status(200).json({
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          },
          'request-date': new Date().toUTCString()
        }
      });
    }
  } catch (error) {
    console.error('Error querying user: ' + error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


