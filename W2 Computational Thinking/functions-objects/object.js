/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/

function getProduct(productId) {

    let product = {
        id:100,
        serialNumber: 'WD579000',
        manufacturer: 'Apple',
        price: 1500
    }
    //write your code here
  }
  //open your browser console to check the results
  console.log('result: ' + JSON.stringify(getProduct(1)));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = getProduct;
  }

var product1;
product1 = create();
var id = 1;
var serialnum = 'werwer';
var manf = 'Windows';
var price = 100;
var data = [];

// create(,0,painting[400]);
// create(15,0,painting[401]);
// create(30,0,painting[402]);
// create(45,0,painting[403]);
// create(60,0,painting[404]);
// create(75,0,painting[405]);
// create(90,0,painting[406]);
// create(105,0,painting[407]);

function getProduct(productId) {
    //write your code here
    let list = [];
    list.push({id:1,serialNumber: 'WD579000',manufacturer:'Apple',price: 1500});
    list.push({id:2,serialNumber: 'WD579111',manufacturer:'Apple',price: 1550});
    list.push({id:3,serialNumber: 'WD579222',manufacturer:'Apple',price: 1000});
    let i = 0;
    let result ;
    for (i=0;i=list.length;i++){
      let prodid = list[i];
      if(prod.id == productId){
        result = prodid;
      }
      return(result);
    }
  }