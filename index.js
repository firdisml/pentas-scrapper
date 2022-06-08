var axios = require('axios');
require('dotenv').config()



function waitforme(ms)  {
  return new Promise( resolve => { setTimeout(resolve, ms); });
}

async function tokenPrint () {

  for (let i = 1; i < `${process.env.TOTAL_PAGE}`; i++) {

    var config = {
      method: 'get',
      url: `https://api.pentas.io/user/${process.env.PENTAS_WALLET}/nft/?page=${i}&sorting=latest`,
      headers: { 
        'origin': 'https://apps.pentas.io'
      }
    };
    
    axios(config)
    .then(function (response) {
    
      for (let j = 0; j < response.data.length; j++) {
  
        if(response.data.lenth != 0){
  
          console.log((response.data[j].scTokenId));
          
  
        }
        else{
          process.exit();
        }
        
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  await waitforme(5000);
  
}

tokenPrint();



