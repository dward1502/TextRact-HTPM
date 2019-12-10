require('dotenv').config();
const docparser = require('docparser-node');
const client = new docparser.Client(process.env.DOCPARSER);
const airTableAPI = require('./airtable');
// client.ping().then(()=>{
//   console.log('Authentication Succeeded!')
// }).catch((err)=>{
//   console.log('Authentication failed!')
// });

// client.getParsers().then((parsers) => {
//  console.log(parsers);
// }).catch((err) => {
//   console.log(err)
// })

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();

today = mm + '/' + dd + '/' + yyyy + hour + minute;


async function docParser (docPath) {
  console.log("[DocParser]"+docPath)

  let path = `./House_applications/${docPath}`
  console.log(path)

  client.uploadFileByPath('hroogvexclwg',`${path}`, {
    remote_id: 'test'
  }).then(function(result) {
    const documentID = result.id;
    console.log(result)
  
    setTimeout(function(){
    let docData =  grabDocParserData(documentID);
    
    return docData;

    }, 240000);
  
  }).catch(function(err){
    console.log(err)
  });

}

function grabDocParserData (docID){
  
  client.getResultsByDocument('hroogvexclwg',`${docID}`, {format:'object'}).then(function(result){
    // console.log(JSON.stringify(result))
    let applicant = result[0].applicant_name;
    let address = result[0].address;
    let full_address = result[0].full_address;
    let price = result[0].rent_price;
    let residents = result[0].residents
    let dependents = result[0].dependents;
    let streetAddress = result[0].streetaddress;
    let unitNumber = result[0].unitnumber;
    let pets = result[0].pets;
    let guarantors = result[0].guarantors;
  
    if(unitNumber == null){
      unitNumber = " "
    }else {
      unitNumber = result[0].unitnumber;
    }
    if(unitNumber == 'Year'){
      unitNumber = " ";
    }
    console.log(unitNumber)
    let docResult = {

      applicant: applicant,
      address: address,
      full_address: full_address,
      price: price,
      residents: residents,
      dependents: dependents,
      streetAddress: streetAddress,
      unitNumber: unitNumber,
      pets: pets,
      guarantors: guarantors
      
    }
    console.log(docResult)
    airTableAPI.airTableData(docResult)

    return docResult;
  
  }).catch(function(err){
    console.log(err)
  })

}


module.exports = {
  docParser
}
