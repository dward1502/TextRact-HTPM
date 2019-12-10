require('dotenv').config();

const Airtable = require('airtable');
const wordDocGen = require('./wordjson');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey:process.env.AIRTABLE
});

const base = Airtable.base('apppCKq9Osr3CdbSl');


function airTableData (data){
  const dataObj = [];
  let unit = data.unitNumber
  let address;
  if(data.unitNumber == ' ') {
    address = data.address;
  } else {
    address = data.streetAddress + ` #${unit}`
  }
  // console.log(`[Info passed to airtable] : ${JSON.stringify(data)}`)
  console.log(address);
  dataObj.push(data);

  base('Property').select({
    filterByFormula:`{Street Address} = "${address}"`
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      console.log("Grabbed airtable records");
      console.log('==========================')
      console.log("[Airtable records]" + JSON.stringify(record));
      let info = record.fields;
      // console.log(`[Data from airtable] : ${JSON.stringify(info)}`)
      dataObj.push(info)
      console.log(dataObj);

      setTimeout(function (){
        wordDocGen.wordGen(dataObj);
      }, 60000)

    })
  }, function done(error) {
    console.log(error)
  });  
}
// airTableData()
module.exports = {
  airTableData
}


