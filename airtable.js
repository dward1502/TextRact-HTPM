require('dotenv').config();

const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE
});

const base = Airtable.base('apppCKq9Osr3CdbSl');
const address = '"2450 Eastridge Loop"';

function airTableData (address) {
  base('Property').select({
    filterByFormula:`{Street Address} = ${address}`
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      let data = record.fields;
      console.log(data)
    })
  }, function done(error) {
    console.log(error)
  });
}

airTableData(address);

module.exports = {
  airTableData
}


