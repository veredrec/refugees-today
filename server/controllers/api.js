const getCountriesDB = require('../../database/queries/getCountries');
const getCountryDB = require('../../database/queries/getCountry');

const getCountries = async (request, response) => {
  try {
    const countries = await getCountriesDB();
    response.send(countries);
  } catch (error) {
    console.log(error);
    response.send({ error: 'There was an error loading the countries' });
  }
};

const getCountry = async (request, response) => {
  try {
    const country = await getCountryDB();
    response.send(country);
  } catch (error) {
    console.log(error);
    response.send({ error: 'There was an error loading the countries' });
  }
};

module.exports = {
  getCountries,
  getCountry
};
