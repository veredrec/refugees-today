const dbConnection = require('../db_connection');

const getCountries = () => {
  const query = `SELECT * FROM countries;`;

  return new Promise((resolve, reject) => {
    dbConnection.query(query, (error, response) => {
      if (error) {
        console.log('Get all countries error: ', error);
        return reject(error);
      } else {
        resolve(response.rows);
      }
    });
  });
};

module.exports = getCountries;
