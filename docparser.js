require('dotenv').config();
const docparser = require('docparser-node');
const client = new docparser.Client('8a19ad7cdaa2265927150152f4429841a40df1ef');

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
function docParser () {

  client.uploadFileByPath('pkinyhgalauc','./House_applications/Sample Rentak Application.pdf', {
    remote_id: 'test'
  }).then(function(result) {
    console.log(result)
    const documentID = result.id;
  
    setTimeout(function(){
    let docData =  grabDocParserData(documentID);
    console.log(docData);
    
    return docData;

    }, 120000);
  
  }).catch(function(err){
    console.log(err)
  });

}

function grabDocParserData (docID){
  
  client.getResultsByDocument('pkinyhgalauc',`${docID}`, {format:'object'}).then(function(result){
    console.log(result)
    let applicant = result[0].applicant_name.last;
    let address = result[0].address;
    let full_address = result[0].full_address;
    let price = result[0].rent_price;
    let additionalApplicant = result[0].additional_applicants.last;
    let dependents = result[0].dependents;
    console.log(`\n [Applicant]${applicant} , [Address] ${address} , [Full Address] ${full_address} , [Price] ${price} , [AdditionalApplicant] ${additionalApplicant} , [Dependents] ${dependents}`)
  
    let docResult = {
      applicant: applicant,
      address: address,
      full_address: full_address,
      price: price,
      addApplicant: additionalApplicant,
      dependents: dependents
    }
    return docResult;
  
  }).catch(function(err){
    console.log(err)
  })

}
docParser();

module.exports = {
  docParser
}
