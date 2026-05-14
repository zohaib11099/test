const q = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const rows = await db.query(q, [email, password]);