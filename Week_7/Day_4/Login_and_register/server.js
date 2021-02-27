const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.post('/item',(req,res)=>{
  console.log(req.body);
  let items = [];
  try{
    const f = fs.readFileSync('./items');
    items = JSON.parse(f)
  }
  catch(e){
    // console.log(e);
  }
  finally{
    items.push(req.body)
  }

  fs.writeFile('./items', JSON.stringify(items), err=>{
    if(err){
      console.log('error writing to file');
    }
  })

  res.send({message:'OK'})
})

app.get('/show', (req,res)=>{
  let items = [];
  try{
    const f = fs.readFileSync('./items');
    items = JSON.parse(f);
  }
  catch(e){
    res.send('data not found')
  }
  res.send(items)
})




app.listen(3000)
