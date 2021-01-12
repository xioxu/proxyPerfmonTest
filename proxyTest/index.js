const axios = require('axios');
const WaitGroup = require('wait-group-promise');

var wg = new WaitGroup();

async function doTest(concurrent){

  while(true){
    for(var i=0; i<concurrent;i++){
      wg.add(1);
      (async (nIdx)=>{
          await siteReq(1);
          console.log(`Done index: ${nIdx}`)
      })(i)
    }

    
  const p = wg.wait();
  await p;
  console.log("All done!")
  }


}

async function siteReq(delaySeconds){
    await axios.get('http://localhost:3000/r?delay='+delaySeconds)
    wg.done();
}

doTest(5)