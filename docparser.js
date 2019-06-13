require('dotenv').config();
const docparser = require('docparser-node');
const client = new docparser.Client(process.env.DOCPARSER_SECRET);

client.ping().then(()=>{
  console.log('Authentication Succeeded!')
}).catch((err)=>{
  console.log('Authentication failed!')
});

client.getParsers().then((parsers) => {
 console.log(parsers);
}).catch((err) => {
  console.log(err)
})


