const officegen = require('officegen');
const fs = require('fs');

let docx = officegen('docx');

const p1Options = {
  font_face: 'Times New Roman',
  font_size: 11
}
const pNumTitle = {
  font_face: 'Times New Roman',
  font_size: 18
}
const pSectionTitle = {
  font_face: 'Times New Roman',
  font_size: 20,
  bold: true
}
const p1Bold = {
  font_face: 'Times New Roman',
  font_size: 11,
  bold: true
}
const bulPoint = String.fromCharCode( 8226 );
const squareFilled = String.fromCharCode( 9724 );

let tenant1, tenant2, tenant3, address, unitNum, city, zip, createdDate, checkFamResidence, checkMultiResidence, unitType, county, hoa, hoaDocs, hoaname, noPetCheck, petCheck, noKnowlLead;

tenant1 = 'Luke Skywalker'; tenant2 = 'Han Solo'; tenant3 = 'Chewbacca';
address = '3668 Quimby St'; unitNum = 1; city = 'San Diego'; zip = 92106;
createdDate = "7/4/2019";
checkFamResidence = String.fromCharCode( 9723 ); checkMultiResidence = String.fromCharCode( 9723 ); unitType = 'Residential'; county = 'San Diego'; noPetCheck = String.fromCharCode( 9723 ); petCheck = String.fromCharCode( 9723 ); hoa = String.fromCharCode( 9723 ); hoaDocs = String.fromCharCode( 9723 );
hoaname = 'Point Loma';

let numMail,mailBoxNum,numResidence,numOpener,numGate,commonArea,parkPerm,numStorSpace,numParkSpot,storNum,parkNum, leadDisclosuresApply;

numMail = 11; mailBoxNum = 2; numResidence= 1; numOpener= 3; numGate=232; commonArea= 'yes'; parkPerm='no'; numStorSpace = 1; numParkSpot = 1; storNum = 2; parkNum = 1; leadDisclosuresApply = String.fromCharCode( 9723 );noKnowlLead = String.fromCharCode( 9723 );
let startRent, endRent;
startRent = '2/2/2019';
endRent = '5/5/2019';
let petName1, petName2, petType1, petType2, petDescription1, petDescription2;
petName1 = 'bob'; petName2='leroy'; petType1='dog'; petType2='cat'; petDescription1='ok'; petDescription2='no';
let guarantor = 'Goofy';
let propOwner = 'Donald Duck';
let baseRent,petRent,parkingRent,storageRent,applianceRent,otherRent,totalRent;
baseRent=1200;petRent=100;parkingRent=50;storageRent=20;applianceRent=12;otherRent=0;totalRent=2500;
let securityDeposit;
securityDeposit = 2000;
let date = '7/8/2019';

var table = [
  [{
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`Unit Number`,`${unitNum}`],
  [`Unit Address`,`${address}`],
  [`City`,`${city}`],
  [`State`,`California`],
  [`Zip`,`${zip}`],
  [`County`,`${county}`]
]

var termTable = [
  [{
    val:"Description",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Date",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`Unit Number`,`${startRent}`],
  [`Unit Address`,`${endRent}`],
]

var residentTable = [
  [{
    val:"Resident(s)",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`${tenant1}`,`${tenant1}`],
  [`${tenant3}`,`${tenant3}`],
]

var occupantTable = [
  [{
    val:"Occupant(s)",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`${tenant1}`,`${tenant1}`],
  [`${tenant3}`,`${tenant3}`],
]

var petTable = [
  [{
    val:"Pet Name",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Type",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  },
  {
    val:"Description",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  }
],
  [`${petName1}`,`${petType1}`,`${petDescription1}`],
  [`${petName2}`,`${petType2}`,`${petDescription2}`],
]

var guarantorsTable = [
  [{
    val:"Guarantors Name",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`${guarantor}`,''],
  ['',''],
]

var ownerTable = [
  [{
    val:"Property Ownership and Property Management",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },  
],
  [`Landlord Name: ${propOwner}`],
  ['Property Manager: HomeTeam Property Management, 821 Bowsprit Road, Chula Vista, CA 91914 (619) 872-7368'],
]

var rentTable = [
  [{
    val:"Occupant(s)",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`Base Rent`,`${baseRent}`],
  [`Monthly Pet Rent`,`${petRent}`],
  [`Monthly Garage/ Parking Rent`,`${parkingRent}`],
  [`Monthly Storage Space Rent`,`${storageRent}`],
  [`Monthl Appliance Rent`,`${applianceRent}`],
  [`Other Monthly Charge`,`${otherRent}`],
  [`Total Monthly Rent`,`${totalRent}`],
]

var depositTable = [
  [{
    val:"Description",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Amount",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  }
],
  [`Security Deposit`,`${securityDeposit}`]
]

var devicesTable = [
  [{
    val:"Number Provided",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Type",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  },
  {
    val:"Re-Keyed?",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Space Info",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  }
],
  [`${numMail}`,`Mail Key`,`No`,`${mailBoxNum}`],
  [`${numResidence}`,`Key(s) to the residence`,`Yes`,`Not Applicable`],
  [`${numOpener}`,`Garage Openers`,`No`,`Not Applicable`],
  [`${numGate}`,`Gate Openers`,`No`,`Not Applicable`],
  [`${commonArea}`,`Key(s)/ openers to common areas`,`No`,`Not Applicable`],
  [`${parkPerm}`,`Parking Permits`,`Not Applicable`,`Not Applicable`],
  [`${numStorSpace}`,`Storage Space No.`,`Not Applicable`,`${storNum}`],
  [`${numParkSpot}`,`Parking Space No.`,`Not Applicable`,`${parkNum}`],
]

var utilitiesTable = [
  [{
    val:"Utility/Service",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Utility's Customer of Record",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  },
  {
    val:"Charged to Resident",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Calculation Method for Charges to Resident",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Common Areas (If Any)",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
],
  [`Gas`,``,``,``,``],
  [`Electricity`,``,``,``,``],
  [``,``,``,``,``],
]

var finalTable = [
  [{
    val:"Date",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  },
  {
    val:"Resident Name",
    opts:{
      cellColWidth: 4400,
      align: "center",
      shd: {
        fill: "7F7F7F",
        themeFill: "text1",
        "themeFillTint": "80"
    },
    }
  },
  {
    val:"Resident Signature",
    opts: {
        cellColWidth: 3200,
        align: "center",
        shd: {
          fill: "7F7F7F",
          themeFill: "text1",
          "themeFillTint": "80"
      },
    }
  }
],
  [`${date}`,`${tenant1}`,``],
  [`${date}`,`${tenant2}`,``],
]

var tableStyle = {
  tableColWidth: 4261,
  tableSize: 24,
  tableColor: "000000",
  tableAlign: "left",
  tableFontFamily: "Times New Roman",
  borders: true, // enable borders in table
  borderColor: "000000", // color for border
  borderSize: "12", // size of border width
}

const data = [
  [
    {
      type:"text",
      val:"Residential Lease Agreement",
      opt: pSectionTitle
    }, 
    {type:'linebreak'},
    {type:'linebreak'},
    {type:'linebreak'},
  ],
  [
    {
      type:'text',
      val:'Lease Agreement Prepared for:',
      opt: p1Options,
    },
    {type:'linebreak'},
    {
      type:'text',
      val: `    ${tenant1}`,
      opt: p1Options
    },
    {type:'linebreak'},
    {
      type:'text',
      val: `    ${tenant2}`,
      opt: p1Options
    },
    {type:'linebreak'},
    {
      type:'text',
      val: `    ${tenant3}`,
      opt: p1Options
    }
  ],
  [
    {
      type:'text',
      val:"For the property Located at: ",
      opt:p1Options
    },
    {type:'linebreak'},
    {
      type:'text',
      val:` ${address} ${unitNum}`,
      opt:p1Options
    },
    {type:'linebreak'},
    {
      type:'text',
      val:`${city}, California ${zip}`,
      opt:p1Options
    }
  ],
  {
    type:'pagebreak'
  },
  [
    {
      type:'text',
      val:"Residential Lease / Rental Agreement",
      opt:pSectionTitle
    },
    {type:'linebreak'},
    {
      type:'text',
      val:`Dated: ${createdDate}`,
      opt:p1Options
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {type:'linebreak'},
  ],
  
  [
    {
      type:'text',
      val:"A. Variable Lease Terms",
      opt:pSectionTitle
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {
      type:'text',
      val:"1. Residence Description",
      opt:pNumTitle
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {
      type:'text',
      val:`${checkFamResidence} (If filled) A single family residence`,
      opt:p1Options
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {
      type:'text',
      val:`${checkMultiResidence} (If filled) Part of a mulit-family residential complex`,
      opt:p1Options
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {
      type:'text',
      val:`Unit Type:[${unitType}]`,
      opt:p1Options
    },
    {type:'linebreak'},
    {type:'linebreak'},
    {
      type:'text',
      val:`2. Property Address`,
      opt:pNumTitle
    },
    {type:'linebreak'},
    {type:'linebreak'},
  ],
  {
    type:"table",
    val: table,
    opt: tableStyle
  },
  [
    {type:'linebreak'},
  {type:'linebreak'},
  {
    type:'text',
    val:"3. Term",
    opt: pNumTitle
  },
  {type:'linebreak'},
  ],
  {
    type:"table",
    val: termTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`After the Termination date, this agreement will continue on a month-to-month basis until terminated as specified elsewhere in this Agreement`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`4. Residents`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: residentTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`5. Occupants`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: occupantTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`6. Pets`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Pets: ${noPetCheck} are not authorized         ${petCheck}  (If filled) the following pets are authorized`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:"table",
    val: petTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`7. Guarantors`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: guarantorsTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: ownerTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Attorney Fee Cap: $1000.00`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`8. Monthly Rent`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: rentTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`9. Security Deposit`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: depositTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`10. Access Control Devices and Space Information:`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: devicesTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`11. Homeowners Association Information`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"text",
    val:`${hoa} (If filled) The residence is a unit in a development governed by a homeowner's association. Name of HOA: [${hoaname}]`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:"text",
    val:`${hoaDocs} (If filled) Copies of HOA Rules and regulations have been provided to Resident.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`12. Utilities`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:"table",
    val: utilitiesTable,
    opt: tableStyle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`13. Payment Instructions`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'LATE CHARGE',
    opt:p1Bold
  },
  {
    type:'text',
    val:`(Applied if payments have not been recieved within 3 days of their due date):`,
    opt:p1Options
  },
  {
    type:'text',
    val:'6% of monthly rent.',
    opt: p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`All amounts due are payable to:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`HomeTeam Property Management`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`821 Bowsprit Road`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Chula Vista, CA 91914`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(619)872-7368`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Payment must be made by:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Money Order, Cashiers Check, Personal Check - No Personal checks will be accepted after the 6th day of the month or in response to a notice to pay rent or quit or a notice to perform covenant or quit requiring payment. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`The normal hours available to make payments in person are from:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`9:00 AM to 5:00 PM, on all non-holiday Weekdays. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`9:00 AM to 3:00 PM on Saturday.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`No other methods of payment will be accepted. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Landlord may, but is not required, to accept payments electronically or by credit card, either directly or through a third party payment service system.  Residents interested in these payment methods should request information about Landlord’s current electronic and credit card payment acceptance policy from the management office.  See the Payment Detail section below.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`14. Disclosures and Property Information `,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${leadDisclosuresApply} (If filled)`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If indicated, the Residence was built before 1978 when lead based paint was still in use.  The Lead Based Paint Disclosure section of this Agreement will apply, and a copy of the pamphlet Protect Your Family From Lead In Your Home has been provided to Resident.',
    opt:p1Options
  },
  {
    type:'text',
    val:`${leadDisclosuresApply} (If filled)`,
    opt:p1Options
  },
  {
    type:'text',
    val:`LEAD DISCLOSURES APPLY:`,
    opt:p1Bold
  },
  {
    type:'text',
    val:'If indicated, the Residence was built before 1978 when lead based paint was still in use.  The Lead Based Paint Disclosure section of this Agreement will apply, and a copy of the pamphlet Protect Your Family From Lead In Your Home has been provided to Resident.',
    opt:p1Options
  },
  {type:'linebreak' },
  {
    type:'text',
    val:`Landlord knowledge of lead-based paint and/or lead-based paint hazards in the Residence or Property:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${noKnowlLead} (If filled) Landlord has no reports or records pertaining to lead-based paint and/or lead-based paint hazards in the Residence or Property. `,
    opt:p1Options
  },
  {
    type:'text',
    val:'${KnowlLead} (If filled) Available reports or records pertaining to lead-based paint and/or lead-based paint hazards in the Residence or Property are as follows:         Copies of the reports or records identified are available for Resident’s review at . ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'WARNING: Lead is a chemical known to the state of California to cause cancer, birth defects and other reproductive harm. For more information go to www.P65Warnings.ca.gov.',
    opt:p1Bold
  },
  {
    type:'text',
    val:`B. Definitions:`,
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Each capitalized term in this Agreement has the definition specified below unless otherwise defined in this Agreement.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`AGREEMENT:`,
    opt:p1Bold
  },
  {
    type:'text',
    val:'This Residential Lease/Rental Agreement',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"LANDLORD'S RELATED PARTIES:",
    opt:p1Bold
  },
  {
    type:'text',
    val:'The Property Manager and the respective officers, directors, members, managers, partners, shareholders, employees, affiliates, agents and representatives of both Landlord and Property Manager.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"RESIDENT'S RELATED PARTIES:",
    opt:p1Bold
  },
  {
    type:'text',
    val:'Other Co-Residents, Occupants, members of your household, your family, guests, agents and others under your control.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"RESIDENCE:",
    opt:p1Bold
  },
  {
    type:'text',
    val:'The Residence is identified in the Variable Lease Term section, and includes all appliances, furniture and fixtures that we provide to you (“Personal Property.”)  The appliances and furniture are described in the Inventory/Move-In Move-Out form.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"PROPERTY:",
    opt:p1Bold
  },
  {
    type:'text',
    val:'If the Residence is a unit in a multi-family complex, the Residence and the complex are collectively referred to as “the Property.”If the residence is a single family residence, “the Property” refers to the Residence alone.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'C. Primary Agreement Terms:',
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'1. Parties',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"This Agreement is entered into between Landlord and Resident(s). Landlord may be identified in this Agreement as “we” or “us.” Resident(s) may collectively be referred to in this Agreement as “you.”",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'2. Agreement',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'You rent the Residence from us.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'3. Term',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'The Agreement term will begin on the Commencement Date and continue until the Termination Date.  Note that this Agreement contains provisions that could alter the Term.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If the Variable Lease Term section is not checked to indicate an automatic continuance of the Agreement on a month-to-month basis after the Termination Date, you must vacate the Residence by the Termination Date (unless you and Landlord agree in writing to extend the term).`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If the Variable Lease Term section is checked to indicate an automatic continuance of the Agreement on a month-to-month basis after the Termination Date, t he Agreement will continue after the Termination Date until either party terminates the Agreement by giving the other party at least thirty (30) days’ written notice, or as otherwise specified by law. `,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If the Variable Lease Term section is checked to indicate an automatic continuance of the Agreement on a month-to-month basis after the Termination Date, and if you would like to vacate on the Termination Date, you must give at least thirty (30) days’ advance written notice of intent to terminate on the Termination Date.`,
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'D. Payments:',
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'1. Rent',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'Payment instructions (including forms of payment accepted, to whom payments are to be made, and the address where payments are to be made), are specified in the Variable Lease Term section.Any payments made by mail or placed in a drop box are made at your risk and must be received by us by the due date.You will incur a $25.00 charge for the first dishonored check and $35.00 for any subsequent dishonored check. After receiving any dishonored payment (whether under this Agreement or any other), we reserve the right to require all further payments made by you or on your behalf to be made by money order, certified check or cashier’s check.If a third party tenders a payment on your behalf, we reserve the right to require an acknowledgment from the third party as specified in Civil Code §1947.3(a)(3).',
    opt:p1Options
  },
  {
    type:'text',
    val:'We may, but are not required, to accept payments electronically or by credit card, either directly or through a third party payment service system.If you are interested in these payment methods, request information about our current electronic and credit card payment acceptance policy from the management office.We reserve the right at any time to change our electronic and credit card payment policies and/or procedures, the third party payment service system and/or to cease accepting electronic or credit card payments. It is your responsibility before any payment is due to verify whether we are currently accepting payments electronically or by credit card, the proper procedure, and to arrange with us or any third party payment service system to pay electronically or by credit card.A third party payment service system may charge a fee for this service to you and will have specific requirements and procedures you must follow.If any electronic or credit card payment to us or the third party payment service system, or if any payment tendered on your behalf by a third party, is reversed, not honored, or results in a “charge back,” you will be responsible for Late Charges and any additional cost to us or the payment service system, and we will retain all rights and remedies, including the right to terminate your tenancy.',
    opt:p1Options
  },
  {
    type:'text',
    val:'If you provide a check as payment, you authorize us either to use information from the check to make a one-time electronic fund transfer from the account or to process the payment as a check transaction.  When we use information from the check to make an electronic fund transfer, funds may be withdrawn from the account as soon as the same day we receive the payment, and you will not receive the check back from your financial institution.',
    opt:p1Options
  },
  {
    type:'text',
    val:'Use of drop boxes is at your risk. You can reduce the risk of theft of your payment by using electronic payment methods (if we accept electronic payments), or by mailing or personally delivering payments as directed.All checks and money orders must be made payable as specified on the first page of this Agreement.Do not leave the name of the payee blank on checks or money orders; you will not receive a payment credit if the check or money order is stolen and cashed by another party.',
    opt:p1Options
  },
  {
    type:'text',
    val:'3. Security Deposit',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'We will hold the Security Deposit in compliance with California Civil Code §1950.5.We will fully refund it to you if you comply with all of your rental obligations.Unless required by law, we will not hold the Security Deposit in trust, deposit it in a segregated account, invest it in an interest-bearing account, nor pay you any interest on the Security Deposit.If you do not comply with all of your rental obligations, we may use the security deposit to:',
    opt:p1Options
  },
  {
    type:'text',
    val:`${bulPoint} Compensate us for your payment default; or breach of any other obligation under this Agreement, including the cost of recovering possession of the Residence, rental commissions, advertising expenses and other costs incurred because of your breach of the Agreement and the Rent and other amounts due through the end of the Agreement term, (including Rent due up through the date you vacate the Residence, Rent due through the date of judgment, and Rent due after the date of judgment through the end of the original Agreement term) and any other amount necessary to compensate us for your breach of the Agreement, minus amounts we reasonably could have avoided;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} ${bulPoint} Clean the Residence at the termination of the tenancy, if not returned to us at the same level of cleanliness as received;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Remedy future defaults by you in any obligation to restore, replace or return personal property or appurtenances, exclusive of ordinary wear and tear; or`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Repair damages to the Residence and Property, exclusive of ordinary wear and tear, caused by you or your Related Parties.Damage or deterioration of the Residence is not ordinary wear and tear if it could have been prevented by good maintenance practices by you, or if you failed to notify us of a maintenance issue in a timely fashion in writing so that we could prevent the damage or deterioration.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`You may not use the Security Deposit in lieu of last month’s Rent or other amounts due under this Agreement.If we apply any portion of your Security Deposit to amounts due during the term of this Agreement, you must replenish the full amount applied within three days of our demand.`,
    opt:p1Options
  },
  {type:'linebreak'},{
    type:'text',
    val:`If we know you intend to vacate the Residence, we will give you written notice of your right to a pre-move out inspection as required by law. This inspection allows you to identify and correct any deficiencies in the Residence to avoid Security Deposit deductions.If you notify us that you want the inspection, we will inspect the Residence (no earlier than two weeks before termination of the tenancy) and provide you with an itemized statement specifying repairs or cleaning to be made at your expense.Except as otherwise specified in this Agreement, you may make these repairs yourself, or clean the Residence yourself, before you move out to avoid these deductions from your Security Deposit.You have the right to be present during the inspection.`,
    opt:p1Options
  },
  {type:'linebreak'},{
    type:'text',
    val:`Within 21 days after you return possession of the Residence to us, we will refund amounts due to you from the Security Deposit, plus an accounting of how we have used any portion of the Security Deposit that we have retained.If the Security Deposit is insufficient to satisfy the total charges, we will send to you an itemized bill payable on demand.Any Security Deposit refund may be paid by one check jointly payable to all Residents but delivered to only one Resident at the last known address of any Resident.The refund and deductions will be calculated without regard to who paid the Security Deposit or whose conduct resulted in any deductions.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'5. Failure to make all payments due before the commencement date',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If you fail to make all payments specified in the section entitled “Initial Amounts Due” before the specified date:',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} We have no obligation to give you possession of the Residence; and`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} We may rescind this Agreement and keep any portion of funds that you have paid (if any) necessary to compensate us for your breach of this Agreement.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`E. Additional Agreement Terms`,
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`1. Appliances`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Use all appliances in the Residence in a safe manner and only as intended.Do not overload dishwashers and use only detergents made for automatic dishwashers. Turn on cold water before starting the garbage disposal, do not overload the disposal, and do not grind bones or other hard objects, rinds, sticky or stringy foods, or put an excessive volume of material in the garbage disposal.To avoid clogs for which you will be responsible, do not put paper towels, diapers, sanitary napkins, food, baby wipes, moist towelettes or wipes (even if advertised as flushable), cotton swabs, non-flushable clumping kitty litter, or other items that are not meant to be flushed in the toilets, and do not pour grease down the drain. You will be responsible for blockages you cause. If the Residence does not have a frost free refrigerator, defrost the refrigerator when there is approximately one inch of frost.Do not use sharp objects to defrost the freezer.If the Residence is equipped with a washer/dryer, clean the lint filter after every load and periodically inspect the dryer vent duct to ensure it has not become detached, blocked, kinked, or crushed.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`You must obtain our written consent before installing any air conditioning unit (including portable air conditioning units), washer, dryer, refrigerator with water dispenser or icemaker, or other appliance.If we grant consent, it may be granted conditionally.Due to concerns about energy consumption, overloading the existing electrical supply, and damage to the Property, consent for appliance installation may be granted on conditions such as:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(i) your agreement to allow us to install them (and to pay us the reasonable costs of installation);`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(ii) the use of specific types of hoses; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(iii) maintenance of renter's liability insurance with coverage amounts that we will specify;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(iv) utilization of drip trays and water leak detector/alarms;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(v) your agreement to compensate us for any losses related to the use or presence of the appliance; and `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(vi) your agreement to pay for additional utilities consumed.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`2. Assignments, Subletting and transfer by Resident`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Your interest in the Residence and this Agreement may not be assigned, sublet or otherwise transferred.  You may not advertise the Residence on Airbnb, Couchsurfing, Craigslist, or any other advertisement or listing service. Any assignment, subletting or transfer (whether by your voluntary act, operation of law, or otherwise), will be void, and we may elect to treat it as a non-curable breach of this Agreement. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`3. Assignment by Landlord`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`During your tenancy, we may transfer or encumber our interest in the Property.  You must look solely to our transferee for performance of our obligations relating to the period after the transfer.  Your obligations under this Agreement will not otherwise be affected by any transfer.  Your rights in the Residence are subject to and subordinate to any existing or future recorded deed of trust, easement, lien or encumbrance.  If a lender forecloses on the Property, you agree to recognize the purchaser as the landlord under this Agreement if you are requested to do so.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`4. Automobile Wash and Repair`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`If permitted on the Property (indicated in the Variable Lease Term section), automobile washing and oil changing may be done only in designated areas.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`5. Balconies, Patios and Repair`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Please do not shake or hang rugs, towels and clothing from windows.  Do not put plants or other items on balcony or patio walls.  If your balcony or patio is visible from outside your Residence, do not keep anything on it other than patio furniture. We reserve the right to prohibit, restrict and control the items on your balcony or patio.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`6. Barbeque Grills`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`If allowed on the Property  (indicated in the Variable Lease Term section), barbeque grills may be used only in designated areas, and only in compliance with applicable laws.  Cities and counties that have adopted the California Fire Code prohibit charcoal burners and other open-flame cooking devices on combustible balconies or within 10 feet of combustible construction unless (1) the Property is a single family residence or duplex, (2) the buildings, balconies and decks are protected by an automatic sprinkler system, or (3) a liquefied-petroleum LP (which includes propane) gas fueled cooking device having a LP gas container of 1 pound or less is used.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`7. Bed Bugs and Pests`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Information about Bed Bugs`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Bed bug Appearance: Bed bugs have six legs. Adult bed bugs have flat bodies about 1/4 of an inch in length. Their color can vary from red and brown to copper colored. Young bed bugs are very small. Their bodies are about 1/16 of an inch in length. They have almost no color. When a bed bug feeds, its body swells, may lengthen, and becomes bright red, sometimes making it appear to be a different insect. Bed bugs do not fly. They can either crawl or be carried from place to place on objects, people, or animals. Bed bugs can be hard to find and identify because they are tiny and try to stay hidden.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Life Cycle and Reproduction: An average bed bug lives for about 10 months. Female bed bugs lay one to five eggs per day. Bed bugs grow to full adulthood in about 21 days. Bed bugs can survive for months without feeding.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Bed bug Bites: Because bed bugs usually feed at night, most people are bitten in their sleep and do not realize they were bitten. A person’s reaction to insect bites is an immune response and so varies from person to person. Sometimes the red welts caused by the bites will not be noticed until many days after a person was bitten, if at all.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Common signs and symptoms of a possible bed bug infestations`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Small red to reddish brown fecal spots on mattresses, box springs, bed frames, mattresses, linens, upholstery, or walls.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint}  Molted bed bug skins, white, sticky eggs, or empty eggshells.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Very heavily infested areas may have a characteristically sweet odor.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Red, itchy bite marks, especially on the legs, arms, and other body parts exposed while sleeping. However, some people do not show bed bug lesions on their bodies even though bed bugs may have fed on them.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Keeping the Residence clean and uncluttered;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Promptly advising us of any pest control needs, or any condition indicating a bed bug infestation in the Residence or Property (such as itchy welts on skin, bed bugs, blood spots (either brown or red) or bed bug excrement spots (brown or black) on bedding, furniture or other items, or a sweet odor).  We are not responsible for any condition about which we are not aware and bed bugs require professional pest control treatment; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Refraining from bringing bed bugs and other pests into the Residence and the Property, and inspecting all luggage, bedding, clothing, and personal property for bed bugs and other pests before move-in, returning home after traveling and/or bringing new items to the Residence.  You will allow us to do the same upon request.  If we have a concern about possible infestation, we may (but will not be obligated to) either prohibit you from bringing the item into the Residence and Property or require you to have the item professionally treated at your expense before the item is brought into the Residence or Property.  `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Refraining from bringing into the Residence discarded furniture (found in or by a dumpster or elsewhere).  Furniture may have been discarded because of a bed bug infestation; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Providing us with access to Residence for our pest control assessments and pest control treatment; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Cooperating with inspections to facilitate the detection and treatment of pests, including providing requested information that is necessary to facilitate the detection and treatment of pests. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Upon our request, promptly providing us with copies of all records, documents, sampling data and other materials relating to the condition of the Residence.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"8. Bicycles, Skateboards, Scooters, Rollerblades and Skates",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Pedestrians have the right of way on all sidewalks, walkways and other pedestrian areas throughout the Property.  Bicycles, skateboards, scooters, roller blades/skates, self-balancing motorized boards, and other wheeled apparatus must be used with care, to avoid Property damage, injury and danger for others. Bicycles should be kept only in your Residence or in designated areas (if any) within the Property.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"9. Common Area Amenities",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`If the Residence is part of a multi-family residential complex, various services, equipment and facilities (“Common Area Amenities”) may be provided for your use at your own risk.  Common Area Amenities include all areas and facilities outside of the Residence, within the Property, that are provided and designated by us for the general non-exclusive use of Property residents. Common Area Amenities may include, but are not limited to meeting rooms and clubhouses, laundry facilities, exercise facilities, storerooms, swimming pools, spas, common entrances, lobbies, hallways, staircases, public restrooms, elevators, loading areas, trash/recycling areas, roads, sidewalks, walkways, and landscaped areas. Common Area Amenities are for the exclusive use of you and other Property residents and occupants. Common Area Amenities may not be used by Resident or Resident’s Related Parties for business, commercial, fee-generating or fund-raising purposes unless we otherwise agree in advance and in writing (which we may grant or withhold in our sole discretion). Use of Common Area Amenities is subject to the restrictions described in rules or instructions at the Property.  You may be required to carry and display identification to enter and/or utilize Common Area Amenities. If we allow guests to utilize Common Area Amenities, you may have no more than two guests (accompanied by you) unless we agree otherwise.We may restrict Common Area Amenity usage for repairs or renovations.  We may restrict Common Area Amenity usage for private parties.  You may not install or use any items (temporary or permanent) in common areas, including (but not limited to) cameras (still or video), drones, tents, tarps, jump houses, swimming pools, or sports equipment, unless we provide authorization. Do not leave any personal property in common areas; we may remove and dispose of any personal property left outside of the Residence. To the extent allowed by law, you agree to assume all risk of harm, and waive all claims against us and our Related Parties resulting from the Common Area Amenities, even if caused by the negligence of us or our Related Parties. To the extent allowed by law, use of the Common Area Amenities is at the sole risk of you and your Related Parties.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"10.Condominium/Planned Unit Development",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`If it is indicated in the Variable Lease Term section that the Residence is a unit in a development governed by a homeowner’s association (“HOA”), you and your Related Parties must comply with all covenants, conditions and restrictions, bylaws, rules and regulations and decisions of the HOA. You must pay any fines or charges imposed by the HOA incurred because of any violation by you or your Related Parties.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"11. Conduct and Compliance with Agreement, Law and Rules",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`You are responsible for your own actions, and the actions of your Related Parties.You and the others for which you are responsible:`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} May not create a nuisance on the Residence or Property, and may not disturb other Property residents or neighbors with excessive noise (loud televisions, stereos, voices, etc.) or otherwise;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Must comply with all Landlord rules, regulations and instructions (including posted signs and those specified in this Agreement), and all laws, statutes, ordinances, and requirements of all city, county, state, and federal authorities. We may periodically modify the rules and regulations by delivering a copy of the modifications to you or posting the rules and regulations at the Property;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Must notify us in writing of any dangerous condition, deterioration or damage to the Residence and Property (including Common Area Amenities) so that we may make necessary repairs;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Are responsible for damage to the Residence and Property caused by the action or inaction of you and your Related Parties.You agree to indemnify, defend (with counsel of our choice), and hold us harmless for any liability, costs (including reasonable attorney fees), or claims resulting from your breach of this Agreement or the negligence, violation of law, or willful misconduct of you or your Related Parties.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`You are advised to consider the current and potential exposure to noise that you may experience from activities that occur within and in the vicinity of the Property.  No representations are made as to the impact of current or existing noise levels on you or your Residence.  Potential sources of noise affecting you may arise from automobile traffic, entry gates, roadways, highways and toll roads, emergency facilities, construction activity, church bells or chimes, aircraft overflights, equestrian, bicycle or pedestrian walkways and other noise sources. If the Residence is a unit in a multi-family complex, be aware that multi-family housing areas often have higher densities, and greater associated inconveniences than single family residences.  If you are particularly sensitive to sound, or the activities of others, you may not be comfortable in multi-family housing and you should consider alternatives.  Likewise, if your activities are likely to be disturbing to nearby neighbors in a multi-family living environment, multi-family housing may not be the right choice for you and you should consider alternatives before signing this Lease.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'12. Construction',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If specified above in the Variable Agreement Term section, construction is ongoing at the Property, and details are in the Variable Agreement Term section.There may be inconveniences associated with construction, and you agree that the Rent specified in the Variable Agreement Term section is fair and reasonable while construction is ongoing. You agree that any inconvenience caused by ongoing construction will not give you an offset to rental obligations, or be the basis for a complaint against us for rent relief, or any other claim, right, or remedy against us, including constructive eviction.Although an estimated completion date may be specified, we do not guarantee the construction completion date.We will require the construction to be done in a commercially workmanlike and reasonable manner, and the general hours of construction will be specified in the Variable Agreement Term section.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'13. Continuing Liability',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If you vacate the Residence, or this Agreement is terminated, this will not relieve you of any obligation to pay or reimburse sums to us or to indemnify or hold harmless or defend us from any loss or claim, where the obligation arises during the term of this Agreement or before you vacate the Residence, unless we specifically agree otherwise in writing.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'14. Crime-Free Community',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'You and your Related Parties:',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} May not engage in criminal activity on or near your Residence or the Property;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} May not permit your Residence or the Property to be used to facilitate criminal activity, regardless of whether the individual engaging in such activity is a member of your household, or a guest;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} May not engage in the unlawful manufacturing, selling, using, storing, keeping, or giving of a controlled substance as defined in Health & Safety Code §11350, et seq., at any locations, whether on or near your Residence, the Property or otherwise;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} “Criminal activity” is any activity in violation of laws, ordinances and requirements of city, county, state and federal authorities, including: prostitution (defined in Penal Code §647(b)); criminal street gang activity, (defined in Penal Code §186.20 et seq).; assault and battery, (prohibited in Penal Code §240); burglary, (prohibited in Penal Code §459); the unlawful use and discharge of firearms, (prohibited in Penal Code §245); sexual offenses, (prohibited in Penal Code §269 and 288), drug-related criminal activity, or any breach of this Agreement that otherwise jeopardizes the health, safety and welfare of us, other residents or occupants of the Property or neighbors or involving imminent or actual serious property damage.“Drug-related criminal activity” means the illegal manufacture, sale, distribution, use, or possession with intent to manufacture, sell, distribute, or use of a controlled substance (as defined in Section 102 of the Controlled Substance Act 21 U.S.C. 802);`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'A single violation of any of the provisions above will be a material and non-curable breach of this Agreement and good cause for immediate termination of your tenancy.Unless otherwise provided by law, proof of violation will not require criminal conviction, but will be by a preponderance of the evidence.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'15. Damage to Residence',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If the Residence is significantly damaged or destroyed by fire, earthquake, accident or other casualty that renders the Residence uninhabitable for more than one week, we may terminate this Agreement by giving you written notice of our election to terminate.If the Agreement is not terminated, we will promptly repair the damage, and Rent will be reduced based on the extent to which the damage interferes with your use of Residence (unless we provide alternate housing).If you or your Related Parties cause the damage, there will be no Rent reduction and we will have no obligation to repair the damage.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'16. Delay in Posession',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If we cannot deliver possession of the Residence to you on the Commencement Date for any reason, we will not be liable for the delay, nor will this affect this Agreement’s validity, or extend the term of the Agreement.  However, you will not be obligated to pay Rent or perform any other obligation under this Agreement (other than pay the amounts due specified in the Variable Lease Term section) until we tender possession of the Residence to you.  If we have not tendered possession of the Residence to you within three days of the Commencement Date, you may cancel this Agreement any time before we tender possession of the Residence to you.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'17. Disabilities - Reasonable Accommodation/ Modification',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'Notwithstanding any other provision under this Agreement, upon prior written permission, we agree:  ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'(1) to allow you to make reasonable modifications to the Residence and/or Common Area Amenities as required by law for people with disabilities; and',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'(2) to provide reasonable accommodation as required by law to people with disabilities, including but not limited to ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'(a) making changes or exceptions to rules, policies procedures, or services and ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'(b) allowing assistive animals. We reserve the right to seek verification of disability and disability-related need for any requested modification or accommodation.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'18. Early Termination Option',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If indicated in the Variable Lease Term section, you have the option of amending this Agreement to terminate your tenancy before the Termination Date specified in the Variable Lease Term section.  To exercise your Early Termination Option, you must deliver to us  ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'"(1) a written notice stating that you have elected to exercise your Early Termination Option and identifying the Early Termination Date, and ',
    opt:p1Options
  },
  {
    type:'text',
    val:'(2) the Early Termination Option Fee specified in the Variable Lease Term section, and ',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(3) all Rent and additional Rent due through the Early Termination Date.  When we acknowledge receiving the written notice and payment, the Termination Date will be deemed amended to the Early Termination Date.  The Early Termination Date must be a date within the parameters described in the Variable Lease Term section.  The Early Termination Option may be exercised only if you are not in default under this Agreement when you give notice of your exercise of the Early Termination Option.  All remaining Agreement terms will remain in full force and effect.   ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If you provide the notice unaccompanied by the required payments, the Termination Date will not be changed.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'If you do not properly exercise the Early Termination Option by following the procedure exactly as specified above, or choose not to exercise the Early Termination Option, but vacate your Residence before the Termination Date, all Agreement terms will remain binding (including the original Termination Date), and we will retain all legal remedies for non-compliance with this Agreement.If we know you have vacated the Residence before the end of the term, we have an obligation to try to re-rent the Residence to minimize lost Rent for which you will be responsible.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'19. Entry',
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'We and our Related Parties will have the right to enter the Residence as allowed by law.',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:'Law permits entry in case of',
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} emergency,`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} to make necessary or agreed repairs, decoration, alterations or improvements, supply necessary or agreed services, `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} to test smoke and carbon monoxide detectors, `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} to exhibit the Residence to prospective or actual purchasers, mortgagees, residents, workmen or contractors, `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} to make an inspection under subdivision (f) of Civil Code §1950.5, for purposes relating to water conservation and sub metered water, `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} when you have abandoned or surrendered the Residence and under a court order. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Law also allows entry in additional situations, including (but not limited to)  ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} inspecting waterbeds and other water-filled furniture (Civil Code §1940.5(f)); `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} inspecting your personal agricultural areas (Civil Code §1940.10(f); `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} inspecting balconies, decks and other exterior wood-based elevated elements, to inspect for and treat bed bugs (Civil Code §1954.604); `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} and repairing, testing, and maintaining smoke detectors (Health & Safety Code §13113.7(d)(2)(A)) and carbon monoxide detectors (Health & Safety Code §17926.1(b)). `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Unless you have given us permission to enter, we will give you written notice at least 24 hours before entry unless entry is due to  ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} an emergency, `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} surrender or abandonment of the Residence, or `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} we have agreed to a date and time within a one week time period when we will enter to make repairs. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"We are also not required to give you written notice to show the Residence to prospective or actual purchasers and instead can give you verbal 24 hour notice of entry, if within the previous 120 days from our verbal notice of entry we inform you in writing that the Property is for sale and that you may receive oral notice of our intent to enter. If we give you verbal notice of our intent to enter to show the Residence to purchasers, we will leave written evidence of our entry in the Residence.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`20. Estoppel Certificates`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`Within five (5) days of our written request, you must execute and deliver to us a written statement certifying that this Agreement is unmodified and in full force and effect (or if modified, describing the modification).  Your statement will include any other details we request.  Any prospective Property purchaser or encumbrancer may rely upon your written statement.  If you fail to deliver a statement within the specified time, it will be conclusively presumed that  `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(1) this Agreement is unmodified and in full force and effect, except as we otherwise indicate, (2) there are no uncured defaults in our performance, and`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`"(3) any other details specified by us originally requested of you.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`21. Furniture Moving`,
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`We may designate times and methods for moving furniture, and other household goods to or from the Residence.We will not be liable for any loss resulting from the unavailability of elevator service to move furniture or other household goods, or otherwise to move into or out of the Residence.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"22. Garbage",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`You must dispose of all garbage, waste and recyclable materials in designated containers and/or designated areas and in accordance with applicable law and our instructions.  Unless we indicate otherwise, you may not dispose of large items in Property garbage containers and/or areas.  All boxes must be broken down and crushed before placing them in the appropriate container. You may not dispose of hazardous waste in Property garbage containers or on the Property. Information about disposal and recycling options for household hazardous waste is available at:    http://www.dtsc.ca.gov/HazardousWaste/UniversalWaste/HHW.cfm.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"23. Guests",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You may have overnight guests for no more than 7 nights in any month, and no more than two overnight guests at a time unless we provide specific approval. You must obtain our prior written consent to change Residents or add additional Occupants within the Residence.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"24. Harassment",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Resident and Resident’s Related Parties may not abuse, harass (sexually or otherwise) or threaten Landlord or Landlord’s Related Parties, and others at the Property. Violation of this Agreement provision is a breach of this agreement and grounds for termination of Resident’s tenancy.Resident and Resident’s Related Parties may not unreasonably interfere with management functions",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"25. Insurance: Landlord and Landlord's Related Parties Do Not Insure Your Property",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If indicated in the Variable Lease Term section, you are required to maintain a renter’s insurance policy throughout your tenancy.",
    opt:p1Options
  },
  {
    type:'text',
    val:'Even if you are not required to maintain renter’s insurance, we strongly recommend that you purchase a renter’s insurance policy to protect yourself against personal injury and property damage, including losses from theft, fire, smoke, water damage, and vandalism.',
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If renter’s insurance is required",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(as specified in the Variable Lease Term section) you must maintain a renter’s insurance policy (at your cost) protecting you against claims for bodily injury, personal injury and property damage arising out of your use, occupancy or maintenance of the Residence, including liability to Landlord for damage to Landlord’s property for the following causes of loss: fire, smoke, explosion, backup or overflow of sewer, drain or sump, and water damage.You may not do anything or allow any action that invalidates the policy.The renter’s insurance may be issued by any company of your choice, provided that the carrier is licensed or admitted to transact business in California, and maintains during the policy term a “General Policyholders Rating” of at least a B+, V, in the most current issue of “Best’s Insurance Guide.”We must be listed as an “additional insured” (if this type of coverage is available from the insurance company) or as an “interested party” (if your insurance company will not name us as an “additional insured”) under the insurance policy. Before the Commencement Date, you must deliver to us a certified copy of the insurance policy or certificates of insurance evidencing the existence and amounts of the required insurance.No policy may be canceled or modified except after thirty days prior written notice to us (ten days for nonpayment).At least thirty days before the expiration of the policy, you must furnish us with evidence of renewal.The policy must be on an occurrence basis and have personal liability coverage in an amount specified in the Variable Lease Term section, with a deductible of no more than the amount specified in the Variable Lease Term section.You will be liable for the deductible amount if an insured loss occurs.The policy must contain a waiver of subrogation. The policy may not contain any intra-insured exclusions as between insured persons or organizations.The policy limits will not limit your liability.Any insurance maintained by us and our Related Parties is only for the benefit of us and our Related Parties and you will not be named as an additional insured.You must pay any increase in insurance premiums held by us and our Related Parties for the Property resulting from the actions, omissions, use or occupancy of the Residence by you and your Related Parties.This insurance is meant to protect both you and us, by potentially providing you with a potential recovery source (other than us) if you suffer a loss, and by potentially providing us with a recovery source if you damage the Residence and/or Property. Therefore, your failure to maintain renters insurance is a material breach of this Agreement. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"26. Keys and Opening Devices",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Because we may need access to the Residence in case of an emergency, you may not change any locks or install additional security devices in the Residence without our consent. If permission is granted, you may not later remove locks or the additional security devices without our consent.  ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"27. Landscaping",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Landscaping will be maintained and watered by the parties as specified in the Variable Lease Term section.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"28. Laundry Facilities",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If laundry facilities are available at the Property, the laundry facilities are for the exclusive use by Property residents.  Clothes, laundry baskets, and detergents should not be left unattended in the laundry areas.  Remove laundry as soon as the machine shuts off and dispose of lint, empty containers, and softening sheets in a trash can.  No dye or flammable solutions are permitted.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"29. Liability",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"We will not be liable for any damage or injury to you or others, or to any property, occurring on the Property, except as otherwise provided by law. See the “Common Area Amenities” paragraph above regarding liability for Common Area Amenities.  We and our Related Parties do not insure your personal property.  Even if renter’s insurance is not required, we strongly recommend that you purchase a renter’s insurance policy to protect against personal injury and property damage, including losses from theft, fire, smoke, water damage, and vandalism.  To the extent allowed by law, you (on behalf of yourself and the Resident Related Parties) assume all risk of harm or damage to any person or property, and waive all claims against us and the Landlord Related Parties relating to participation in activities, events, services and programs offered or sponsored by us or the Landlord Related Parties.  ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"30. Maintenance, Alterations, and Residence Condition",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"At the beginning of the tenancy, the parties will complete and sign an Inventory/Move In/Move Out form documenting the condition of the Residence and an inventory of appliances, furniture, and furnishings.  If you fail to report any defects on the Inventory/Move In/Move Out form, it will be conclusively presumed that the Residence and Personal Property are in good condition.  You must maintain the Residence in a clean, healthy, safe and sanitary condition.  Excessive items may not be stored or accumulate inside the Residence. Don’t block windows or doors; they must be able to be fully opened. Maintain clear pathways into and through every room in the Residence. Do not place combustible materials near combustion sources such as the stove, oven, heater and/or water heater. Kitchen appliances and fixtures, bathroom fixtures, and every room in the Residence must be able to be used for their intended purposes. You may not paint, wall paper, add adhesive shelf liner, or make other alterations to the Residence without our prior written consent. We will supply the Residence with functioning light bulbs before you take possession of the Residence. You must replace nonfunctional light bulbs at your expense.   You acknowledge that we have not made any promises to make any changes to the Property except as specified in this Agreement.  You must maintain a temperature of at least 55˚F in the Residence to prevent the pipes from freezing. We reserve the right to prohibit or restrict items visible from the exterior of the Residence (e.g. in your windows, window sills, doors, and on your balcony or patio) for safety purposes and to ensure a first class appearance.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"31. Maintenance Request",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Except in cases of emergency, all requests for repairs, and all notices regarding the condition of the Property must be made to us in writing.  This will ensure that we receive and properly process your request or notice.  Notations on the Inventory/Move In/Move Out form documenting the condition of the Residence do not constitute a request for repairs; you must complete a separate written request for maintenance.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"32. Management",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The Property Manager identified in the Variable Lease Term section is authorized to manage the Residence on our behalf and is authorized to act on our behalf to receive service of process, notices, and demands. However, the Property Manager is not a party to this Agreement, and should not be named as a party in any action you bring alleging a breach of this Agreement.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"33. Military - Early Termination",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You may terminate this Agreement before the Termination Date specified on page 1 if:",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"1. You become a member of the Armed Forces of the United States after you enter the Agreement; or",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"2. You are or become a member of the Armed forces of the United States and receive: ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Orders for a permanent change of station; or `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Orders to deploy for a period of at least 90 days.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You must give us written notice of termination, and the new termination date must be at least 30 days after the first date on which the next rental payment is due. (For example, if you served the notice on September 15th, your tenancy would terminate on October 31.) You must furnish to us proof to establish you qualify for this limited exception. Proof may consist of any official military orders, or any notification, certification, or verification from the service member’s commanding officer regarding the service member’s current or future military duty status.Military permission for base housing does not constitute a permanent change-of-station order.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"34. Mold",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Mold consists of naturally occurring microscopic organisms.  Mold breaks down and feeds on organic matter in the environment.  When moldy materials are damaged or disturbed, mold spores and other materials may be released into the air.  Exposure can occur through inhalation or direct contact.  Most molds are not harmful to most people, but it is believed that certain types and amounts of mold may lead to adverse health effects in some people.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"A certain amount of mold exists in every home.Controlling moisture and proper housekeeping are necessary to limit mold growth.We have inspected the Residence and are not aware of any mold problems or existing conditions that may contribute to mold growth in the Residence.You agree to maintain the Residence to prevent mold growth. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You agree to:",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"KEEP THE RESIDENCE CLEAN",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Use household cleaners on hard surfaces `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Remove garbage regularly and remove moldy or rotting items promptly from the Residence (whether food, wet clothing, or other materials)`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Remove garbage regularly and remove moldy or rotting items promptly from the Residence (whether food, wet clothing, or other materials)`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"CONTROL MOISTURE IN THE RESIDENCE AND INCREASE AIR CIRCULATION",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Use hood vents when cooking `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Use exhaust fans when bathing/showering until moisture is removed from the bathroom `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Hang shower curtains inside the bathtub when showering or securely close shower doors.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Leave bathroom and shower doors open after use  `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Use air conditioning, heating and fans as necessary to keep air circulating throughout the Residence `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Water all indoor plants outdoors`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Close windows and doors (when appropriate) to prevent rain and other outdoor water from coming inside the Residence  `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Open windows when appropriate to increase air circulation `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Wipe up visible moisture `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If there is a washer in the Residence, periodically check the washer hose `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If a dryer is installed in the Residence, ensure that the vent is properly connected and clear of any obstructions and clean the lint screen regularly `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Window frames, baseboards, walls and carpets `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} The ceiling`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Any damp material made of cellulose (such as wallpaper, books, papers, and newspapers)`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Appliances (including washers/dryers/dishwashers and refrigerators)`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Around all plumbing fixtures (toilets, bathtubs, showers, sinks and below sinks)`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Areas with limited air circulation such as closets, shelves and cupboards`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Personal property`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Ensure good air circulation in closets, cupboards and shelves by periodically keeping them open, not stacking items tightly, and/or using products to control moisture `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Bring any personal property into the Residence that may contain high levels of mold, especially “soft possessions” such as couches, chairs, mattresses, and pillows`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Stack items against walls in a manner that decreases air circulation and may lead to mold`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Maintain an excessive number of indoor plants`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Maintain a fish tank or other water filled container without our written consent`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"PERIODICALLY INSPECT THE RESIDENCE FOR MOISTURE AND MOLD",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The most reliable methods for identifying elevated amounts of mold are (1) smell and (2) routine visual inspections for mold or signs of moisture and water damage.You agree to inspect the property (both visually and by smell) for mold growth inside the Residence at least once per month.The inspection will include but is not limited to:",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"YOU AGREE TO PROMPTLY REPORT TO US IN WRITING:",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Visible or suspected mold you do not clean as explained below.Mold may range in color from orange to green, brown, and/or black. There is often a musty odor present.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Overflows or leaks around showers/bath/sink/toilet/washers/refrigerator/air conditioners `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Plumbing problems `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Discoloration of walls, baseboards, doors, window frames, ceilings`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Loose, missing or failing grout or caulk around tubs, showers, sinks, faucets, countertops `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Clothes dryer vent leaks `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Any non-operational windows, doors, fans, heating or air conditioning units`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Any evidence of leaks or excessive moisture in the Residence or on the Property `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Any maintenance needed at the Property`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"YOU AGREE THAT YOU WILL NOT:",
    opt:p1Bold
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Bring any personal property into the Residence that may contain high levels of mold, especially “soft possessions” such as couches, chairs, mattresses, and pillows`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Stack items against walls in a manner that decreases air circulation and may lead to mold `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Maintain an excessive number of indoor plants`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Maintain a fish tank or other water filled container without our written consent `,
    opt:p1Options
  },
  {type:'linebreak'},

  {type:'linebreak'},
  {
    type:'text',
    val:"If a small amount of mold has grown on a non-porous surface such as ceramic tile, Formica, vinyl flooring, metal, or plastic, and the mold is not due to an ongoing leak or moisture problem, you agree to clean the areas with soap (or detergent) and a small amount of water, let the surface dry, and then within 24 hours apply a non-staining cleaner such as Lysol Disinfectant®, Pine-Sol Disinfectant®, Tilex Mildew Remover®, or Clorox Cleanup®.Because Tilex Mildew Remover® and Clorox Cleanup® contain bleach (which may discolor some materials), they may not be appropriate cleaners if discoloration could be a problem.",
    opt:p1Options
  },
  {type:'linebreak'},

  {type:'linebreak'},
  {
    type:'text',
    val:"You agree to comply with all instructions and requirements necessary to prepare the Residence and/or Property for investigation and remediation, to control water intrusion, to control mold growth, or to make repairs.Storage, cleaning, removal, or replacement of contaminated or potentially contaminated personal property will be your responsibility unless the elevated mold growth was the result of our negligence, intentional wrongdoing or violation of law.We are not responsible for any condition about which we are not aware.You agree to provide us with copies of all records, documents, sampling data and other material relating to any water leak, excessive moisture, mold conditions in the Residence or Property as soon as you obtain them.Violation of this section will be a material breach of this Agreement.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"35. Move-Out Obligations",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"At termination of this Agreement, you must",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} give us all of your keys and other opening devices to the Residence, including any common areas; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} surrender the Residence to us empty of all personal property and persons; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} vacate all parking and storage spaces, if any; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} deliver the Residence to us in the same condition as received, reasonable wear and tear excepted; `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} clean the Residence to the level of cleanliness as received; (f) and give us written notice of your forwarding address. At termination of the tenancy, we reserve the right to remove any improvements that you installed, whether or not we authorized the improvements, at your expense. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"36. Multiple Residents",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If there is more than one Resident under this Agreement, each Resident is jointly and severally liable for all rental obligations.Violation of this Agreement by any Resident or Resident’s Related Parties is deemed a violation by all Residents.Requests and notices from us to any Resident will constitute notice to all Residents and Occupants.Any notices from, consents by or actions taken by any Resident are deemed a notice from, consent by, or action of all Residents.All demonstrations, inspections and explanations made by us to one of the Residents will be binding on all Residents as if made to each of them.Any Resident or Occupant who has permanently moved out according to another Resident may, at our option and discretion, no longer be entitled to occupancy of or keys to the Residence.However, the termination of that person's right of occupancy will not release that person from any and all obligations under this Agreement or any renewal, unless we agree otherwise in writing.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"37. No Release",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You will not be released from this Agreement on the grounds of voluntary or involuntary school withdrawal or transfer, business transfer, layoff or termination, marriage, divorce, marriage reconciliation, loss of co-Residents, bad health, or any other reason unless we agree otherwise in writing or unless the Military – Early Termination section above applies.  We may grant or withhold consent to a release in our sole discretion.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"38. Occupants",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The Residence may be occupied only by the Resident(s) and all other authorized Occupants specified above in the Variable Lease Term section.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"39. Parking / Garage / Vehicles",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If parking spaces or garages are assigned, you may park on the Property only in the garage or parking space(s) specified in the Variable Lease Term section. Parking spaces and garages may not be used for operation of a business or as an extension of the living area of the Residence.  We reserve the right to temporarily or permanently change your parking space(s) or garage and to assign another to you with 5 days’ prior notice to you.  We may issue parking stickers or other devices to control parking.  If issued, you must use the parking control devices.   If specified in the Variable Lease Term section, monthly Garage/Parking Rent is charged for this privilege.  Parking spaces (if any) may be used only for parking passenger automobiles or light utility vehicles. If a parking space or garage has been assigned to you, you must park in it to maximize parking for others.  If an exclusive-use garage has been designated for your use, you may use your garage secondarily for storage, but only if it doesn’t interfere with your ability to park in the garage.  Garage doors must be kept closed and locked unless you are entering or exiting the garage.  Vehicles not kept in compliance with applicable rules, regulations and law are subject to towing at the vehicle owner’s expense.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:" A vehicle may be towed if it: ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(A) has flat tires or other condition rendering it inoperable;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(B) is leaking fluids;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(C) for non-assigned parking spaces, has not been moved in more than 96 hours;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(D) takes up more than one parking space;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(E) belongs to a Resident or Occupant who has surrendered or abandoned the Residence;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(F) is parked in a marked accessible space without the legally required Disabled Person Plate or Placard insignia;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(G) blocks another vehicle from exiting;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`(H) is parked in a fire lane or designated "no parking" or "restricted parking" area;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(I) is parked in a space reserved for other residents;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(J) is not properly parked in a designated area;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(K) blocks access to a garbage area, entrance, driveway, other parking spaces, or other area; (L) cannot lawfully be operated as a vehicle on the road;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(M) has a malfunctioning alarm or has an alarm which is not silenced within 10 minutes;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(N) is parked in a designated visitor or office parking space; or",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(O) any other reason allowed by law.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Gasoline, fuels or other explosive materials may not be stored anywhere on the Property.  You will be responsible for oil stains and other damage caused by your vehicles and the vehicles of your Related Parties.  Parking is at the risk of the vehicle owner or operator. We will have no liability for damage to or loss of any vehicle or any personal property contained within a vehicle or a garage.  Parking spaces may not be available for guests or they may be limited in number and location.  Tandem parking will be permitted only with our prior written consent. You may install an electric vehicle charging station only with our advanced written consent, which will be granted or withheld in our sole discretion, except as otherwise provided by law.  Operate your vehicle safely and limit your vehicle’s speed to 5 miles per hour within the Property. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You must immediately vacate and remove all vehicles from the Property",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(a) if you do not pay parking or garage fees (if any) when due;",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(b) after service of any notice allowed by law; and",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"(c) at the earlier of the Termination Date or the date that you vacate the Residence.  Unless otherwise agreed by us, Garage/Parking Rent will be due during the entire term of your tenancy.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"40 Pets",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You may not feed stray or wild animals.You may not have any pets at the Residence or on the Property without our prior written consent, which we may withhold in our sole discretion. This prohibition applies to all pets, including “visiting” pets.We grant you permission to keep any pets listed above in the Variable Lease Term section as an “Authorized Pet.”If any pets are authorized you agree to follow the following rules for your pet(s):",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Pets may not cause any disturbance that might reasonably annoy neighbors including making noise, creating odors, or leaving waste on the Property.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Any damage caused by a pet will be your responsibility and you will be charged to repair it. This includes (but is not limited to) window coverings, carpet cleaning or replacement, damage to walls, flooring, screens and common area landscape.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Pick up after your pet(s) and properly dispose of all waste.Kitty litter must be placed in a bag before placing it in the trash.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Use a stain and odor-removing product with enzymes (such as Nature’s Miracle) as necessary, and maintain the Residence in a sanitary, odor-free condition.You can determine where the stain and odor-removing product with enzymes must be used by viewing the Residence with a black light.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If your pet is a cat, keep a scratching post. `,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Pets must be licensed and vaccinated in accordance with local laws. You must provide proof if we request it.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Comply with all local laws and regulations relating to the pets.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} Take action to avoid pest infestations (fleas, etc.) in the Residence and Property.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} You must confine your pet if we or our Related Parties need access to the Residence.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} Pets must remain inside the Residence unless they are under direct control of a responsible person at all times.Dogs must be on a leash when outside of the Residence.You agree to defend, indemnify and save us harmless from all loss, claim, damage or liability relating to your pets.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} You represent to us that the pet is housebroken, has no vicious tendencies or history of threatening or causing harm to persons by biting, scratching, chewing or otherwise.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} Pets are not allowed in pool areas, clubhouses, business office, laundry rooms, business center or fitness centers. Pets may not be bathed or groomed in the laundry room sinks, pools, or pool area.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} Permission to have a pet may be revoked at any time with three days’ notice for cause, or with thirty days’ notice without cause. You will be asked to remove any pet that bothers others or constitutes a problem (potential or actual) to neighbors or others, as determined in our sole discretion. If you fail to remove your pet after being requested to do so, this will be a material breach of the Agreement, allowing us to terminate your tenancy.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"41. Pool/Spa",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"If the Property has a pool or spa, you may use them only during posted hours.  Children under the age of fourteen (14) must have adult supervision in the pool and spa. You may not serve or eat food in or around the pool area at any time without our consent.  Drinks must be served in unbreakable containers, and no alcoholic drinks are allowed in the pool area.  For safety reasons, people should not use the pool and/or spa alone, should not dive into the pool (unless off of a diving board) or spa, and no intoxicated persons may use the pool or spa.  Be considerate of others.  Don’t be excessively noisy or rowdy or wear excessively revealing clothing.  Please shower before using the pool and spa.  Do not use inner tubes, rafts or any other personal items or objects in the pool if they disturb others (with the exception of personal flotation devices for persons who cannot swim).   Incontinent people using the pool or spa must use waterproof pants. Use the pool safety equipment only in case of emergency.",
    opt:p1Options
  },
  {
    type:'text',
    val:'NO LIFEGUARD WILL BE ON DUTY.',
    opt:p1Bold
  },
  {
    type:'text',
    val:'People use the pool and spa at their own risk.  We will not be responsible for accident or injury, or articles that are lost, damaged or stolen.',
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"42. Posted signs and instructions from landloard",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"You must obey all posted signs on the Property and instructions from us.",
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"43. Posting Flyers",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"Flyers may be posted only in designated areas, if any.  If flyers are allowed to be posted, we may remove any commercial or offensive material, or material not in keeping with the nature of the Property, as determined in our sole discretion.",
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"44. Representations of Resident",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"You warrant that all statements in your rental application and other documents submitted by you to us (whether previously or in the future) are accurate.  If they are not, this will be a non-curable breach of this Agreement and we may terminate your tenancy.",
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"45. Satellite Dishes",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"You may install a satellite dish for personal, private use under the following conditions:",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} The satellite dish must be one meter or less in diameter;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} The satellite dish may only be installed in the Residence in areas within your exclusive control.No part of the satellite dish may extend beyond a balcony or patio railing.The satellite dish may not be installed in common areas, including but not limited to the roof, outside walls, window sills, common balconies, hallways or stairways.Note that allowable locations may not provide an optimal signal, or any signal. We do not warrant that the Residence will provide a suitable location for receiving a satellite signal.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} You may not make physical modifications to the Property and may not cause physical or structural damage to the Property.No holes may be drilled through exterior walls or the roof.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} You must install, maintain and remove the satellite dish in a manner consistent with industry standards and you will be liable for any damage or injury caused by the installation, maintenance or removal of the satellite dish.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:`${bulPoint} You must move the satellite dish at your expense, upon our request, for Residence or Property maintenance or repairs.`,
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"46. Security",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"47. Signs",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"We retain the right to place For Sale/For Rent signs on the Residence.",
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"48. Smoke and Carbon Monoxide Detectors",
    opt:pNumTitle
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"The Residence is equipped with a functioning smoke detection device(s) and may be equipped with a functioning carbon monoxide detector.You must test the device(s) weekly and immediately report any repair needs to us.",
    opt:p1Options
  },
  {type:'linebreak'},

  {
    type:'text',
    val:"49. Smoke Free Areas",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The parties want to reduce or eliminate (i) the irritation and known health effects of secondhand smoke; (ii) the increased maintenance, cleaning and redecorating costs from smoking, and (iii) the increased risk of fire and insurance costs associated with smoking.  “Smoking” means inhaling, exhaling, breathing, or carrying any lighted cigar, cigarette, e-cigarette, or other similar lighted product (whether tobacco, marijuana, or any other substance) in any manner or in any form. You and your Related Parties may not smoke anywhere in the designated smoke-free areas, described in the Variable Lease Term section.  You must inform your Related Parties of the no-smoking policy. Other residents of the Property are third-party beneficiaries of this Agreement provision (your smoke-free obligations and restrictions are made to benefit other Property residents as well as to us.) A resident may sue another resident for an injunction to prohibit smoking or for damages, but may not evict another resident.  We will have the right, but not the obligation, to enforce your smoke-free obligations.  A material breach of your smoke-free obligations will be a material breach of this Agreement and grounds for immediate termination of this Agreement and your tenancy.  Neither we nor our Related Parties guarantee or warranty the smoke-free condition of the designated smoke-free areas or the health of you or your Related Parties. We make no implied or express warranties that the Residence or Property will have higher air quality standards than any other areas.  The success of our efforts to make the designated areas smoke-free depend on voluntary compliance by you and others.  We reserve the right to change or eliminate our smoke-free policy in the future.  You acknowledge that current residents may not be under the same smoke-free restrictions.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"50. Storage",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If specified above in the Variable Lease Term section, a separate storage area is provided to you. If specified, monthly Storage Rent is charged for this privilege.Storage space may be used only for storage of non-perishable personal property, expressly excluding (a) any potentially dangerous, flammable, hazardous or toxic property or materials, and (b) any firearms or ammunition.We reserve the right to assign to you another storage space with 5 days’ prior notice to you.You must vacate and remove stored property (a) if you do not pay storage fees (if any) when due; (b) after service of any notice allowed by law; and (c) at the earlier of the Termination Date or the date you vacate the Residence.Unless we otherwise agree, the Storage Rent will be due during the entire term of your tenancy.If you do not remove stored property from the storage space when required, the remaining stored property may be deemed abandoned and we may dispose of it as allowed by law.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"51. Telephones",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"We will comply with California law by providing at least one usable telephone jack and maintaining the telephone wiring inside the Residence in good working condition.  There may be multiple telephone service providers in the area where the Residence is located.  Providers may vary in the services provided and fees charged for connection and/or other charges in service.  Some service providers may charge fees of $120.00 or more to change telephone service from another company to their own.  We make no representation regarding which service provider, if any, provided service to prior tenants.  Our obligation to maintain inside wiring does not include liability for fees to cross-connect to activate service.  You are responsible to arrange all service connections and pay any and all fees associated with the service.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"52. Temporary Relocation",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You agree, at our demand, to temporarily vacate the Residence for a reasonable period and for reasonable purpose, including fumigation, Residence testing/inspection, or repairs.  You must comply with all instructions necessary to prepare the Residence for fumigation, testing/inspection or repair.  If you must vacate, you will be entitled only to an abatement of Rent equal to the per diem Rent for the period that you are required to vacate the Residence, and only if you must vacate for more than 12 hours, and only if you did not cause or exacerbate the condition requiring you to vacate, and only if we do not provide you with alternate housing.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"53. Use",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The Residence may be used as a personal residence only and not for any business or commercial use (except child care as specified by law).   However, you may maintain a personal home office if the home office use does not involve (1) people coming to the Residence for business purposes, or (2) selling goods or services from the Residence.  You may not conduct any auction, garage sale, yard sale or similar activities in the Residence or in the Common Areas.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"54. Utilities",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Details about utilities, (including information about who is responsible for the cost of each utility), are specified in the Variable Lease Term section.  If it is specified that you will contract directly with the utility provider, you must do so before move-in to avoid an interruption of services. If electricity, natural gas, water or sewer services have been discontinued, occupancy of the Residence is hazardous and will be a breach of this Agreement.  Billing statements provided by us or by our billing service must be paid by the due date specified on the billing statement.   If you don’t pay utility-related charges when they are due, we may discontinue providing the utility to you (if allowed by law), and your failure will be a material breach of this Agreement.   We reserve the right to change utility billing service providers.  If we do, you will be notified in writing.  You will be responsible for utilities designated as being your responsibility consumed during your occupancy beginning on the date of delivery of possession until we reacquire possession of the Residence.  If you breach this Agreement by vacating the Residence before the end of the term, you will also be responsible for utility-related charges until the earlier of the Termination Date or until the Residence is re-rented. The due date for Basic Rent and the due date for utility-related charges may not coincide.  You must comply with all utility conservation efforts (whether implemented by governmental agencies, water providers or us) and if you fail to do so, this will be a material violation of this Agreement allowing us to terminate your tenancy. You will be responsible for any fines or charges we incur because of your failure. You must pay charges for utilities you consume, even if they have not been invoiced before you vacate the Residence.  Any obligation that remains unpaid, including amounts that have not yet been invoiced when we reacquire possession, may be deducted from your Security Deposit. If actual amounts have not been determined before we provide an accounting of your Security Deposit, we may estimate the amount until actual numbers become available.  Any billings based on submeter readings will itemize the beginning and ending meter readings, the rate charged to you, and all categories of information that appear within the utility’s standard billing format to us.  We reserve the right to modify the method by which utilities are provided to the Residence or billed to you during your tenancy.  If we are billed for utility services which are your responsibility, you must repay us for the charges within 10 days of our demand for payment.  You may not disturb, tamper, adjust, or disconnect any submetering device or system. We may estimate your consumption if your submeter is broken or does not transmit a meter reading or if we have not received invoices from the utility provider in time to prepare your invoice.  We are not liable for claims arising from utility service outages, interruptions, or fluctuations in utilities provided to your Residence not reasonably within our control.  Common area utilities are for our use only; you may not use them for your personal use. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"55. Window Coverings",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If we provide window coverings, you must use them.If we do not provide window coverings, any window treatments you install must appear white to the outside.Do not use sheets, blankets, foil, etc., in place of draperies or blinds.Do not place objects on a window sill which are visible from the outside.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"56. Waterbeds and Aquariums",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Waterbeds are permitted only with our written permission which will be provided in accordance with California law.  Permission may be conditioned on insurance protecting us, an increase in the security deposit equal to one-half month’s Base Rent, and installation and maintenance in accordance with industry standards.  You must also obtain our permission to have an aquarium of more than 5 gallons.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"F. Disclosures and Notices",
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"1. Abestos",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Asbestos is known to cause cancer.  Any knowledge or records we have of asbestos in the Residence or Property is specified in the Variable Lease Term section of this Agreement.  Disturbing or damaging asbestos containing materials may increase the potential exposure to asbestos.  Do not pierce or damage asbestos containing material.  Notify us immediately in writing if there is any damage to or deterioration of the asbestos containing materials. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"2. Lead Warning Information",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If indicated in the Variable Lease Term section, the Residence was built prior to 1978.  Housing built before 1978 may contain lead-based paint.  Lead from lead-based paint, paint chips and dust can pose health hazards if not managed properly.  Lead exposure is especially harmful to young children and pregnant women.  Before renting pre-1978 housing, landlords must disclose the presence of known lead-based paint and/or lead-based paint hazards in the dwelling.  Residents must also receive a federally approved pamphlet on lead poisoning prevention. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Knowledge we have of lead-based paint and/or lead-based paint hazards in the Residence or Property is specified in the Variable Lease Term section.  Available reports or records pertaining to lead-based paint and/or lead-based paint hazards in the Residence or Property are identified.  Your signature on this Agreement is your acknowledgment that you have been provided a copy of the pamphlet Protect Your Family From Lead In Your Home and that the reports or records have been made available for your review.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"3. Registered Sex Offenders Notice",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Pursuant to Section 290.46 of the Penal Code, information about specified registered sex offenders is made available to the public via an Internet Web site maintained by the Department of Justice at www.meganslaw.ca.gov.  Depending on an offender’s criminal history, this information will include either the address at which the offender resides or the community of residence and ZIP Code in which he or she resides.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"G. Breaches and Remedies",
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"1. Resident Default",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Your right to remain in possession of the Residence is conditioned on your timely and full performance of each of your obligations under this Agreement and applicable law. You will be in material default under the Agreement:",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If you abandon or vacate the Residence;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If you fail to pay Rent, or any other charge required to be paid by you, as and when due;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If you breach any other obligation under this Agreement or applicable law;`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:`${bulPoint} If you have supplied any false or misleading information to us on a rental application or otherwise.This type of default is non-curable.`,
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"2. Remedies",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If you default, we may elect to terminate your rights under this Agreement, and recover from you all damages we incur as a result of the default, including the cost of recovering possession of the Residence, rental commissions, advertising expenses and other costs incurred because of your breach of the Agreement and the Rent and other amounts due through the end of the Agreement term, (including Rent due up through the date you vacate the Residence, Rent due through the date of judgment, and Rent due after the date of judgment through the end of the original Agreement term) and any other amount necessary to compensate us for your breach of the Agreement, minus amounts we reasonably could have avoided.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"3. Cumulative Remedies",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"All remedies specified in this Agreement for noncompliance are cumulative.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"4. Credit",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"A negative report reflecting on your credit record may be submitted to credit-reporting agencies if you fail to fulfill the terms of your obligations under this Agreement.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"5. Damages for failure to vacate",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If you fail to completely vacate the Residence when required, you will be liable for all resulting losses suffered by us including but not limited to, future resident losses, lost Rent, legal costs and other expenses.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"6. Attorney Fees",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"In any legal action brought by either party to enforce this Agreement or relating to the Residence, the prevailing party will be entitled to all costs incurred in connection with that action, including reasonable attorney fees, expert witness and consultant fees, and costs and expenses.  If an Attorney’s Fee Cap is specified in the Variable Lease Term section, attorney’s fees awarded by a court may not exceed that amount.  You must pay all collection-agency fees we incur if you fail to pay all sums due within 10 days after we mail you your security deposit accounting or other demand for payment.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"H. Agreement Interpretation",
    opt:pSectionTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"1. Agreement",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The submission of this Agreement to you for examination and/or execution does not constitute an option or offer. This Agreement will not be effective until signed and delivered by all parties or until we deliver possession of the Residence to you, whichever occurs first.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"2. Amendment",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"This Agreement may not be amended or altered except by a written agreement, signed by you and us.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"3. Construction",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"The singular form will include plural, and visa versa. This Agreement will not be construed as if it had been prepared by one of the parties, but rather as if both parties have prepared it.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"4. Integration",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"This Agreement and the documents referenced in it constitute the entire agreement between the parties, which supersedes all prior and contemporaneous negotiations, agreements, promises and representations. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"5. Partial Invalidity",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If any portion of this Agreement is unenforceable or invalid, that portion will have no effect, but all the remaining provisions of this Agreement will remain in full force.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"6. Successors and Assigns",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"This Agreement is binding upon and inures to the benefit of the heirs, assigns, successors, executors, and administrators of you and us.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"7. Time of the Essence",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Time is of the essence as to each obligation to be performed under this Agreement.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"8. Verbal Representations",
    opt:pNumTitle
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"You agree that we have not made any oral promises, representations, or agreements not contained within this written Agreement. ",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"Our failure to enforce any term of this Agreement will not be deemed a waiver, nor will acceptance of a partial payment be deemed a waiver of our right to the full amount due.  Waiver may not be established by course of conduct.  No waiver will exist unless written and signed by the parties.",
    opt:p1Options
  },
  {type:'linebreak'},
  {
    type:'text',
    val:"If the lead hazard section of this Agreement is marked as being applicable, by signing below, the parties acknowledge that they have read the lead-based paint and lead based paint hazard information in this Agreement and certify, to the best of the parties’ knowledge, that the information provided is true and correct.",
    opt:p1Options
  },
  {
    type:'text',
    val:"Note that this Agreement may automatically continue as a tenancy from month-to-month after the Termination Date. See paragraph C3 above.",
    opt:p1Options
  },







  


]






let out = fs.createWriteStream('wordjson2.docx');

out.on('error', function(err) {
  console.log(err)
});

docx.createByJson(data);
docx.generate(out);
