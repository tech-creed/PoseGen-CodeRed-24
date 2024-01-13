const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/MainDatabase.db');

const createUser = (email, password) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO user (email, password) VALUES (?, ?)', [email, password], (err) => {
        if (err) {
            console.log(err)
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };
  
  const getUser = (email, password) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  };

  const updateUser = (email, gender, age, interest) => {
    return new Promise((resolve, reject) => {
      db.get('UPDATE FROM user WHERE email = ? SET gender = ?, age = ?, interest = ?;', [email, gender, age, interest], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  };
  
  module.exports = { createUser, getUser,updateUser };
  