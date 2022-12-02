const express = require('express');
const cors = require('cors')
const root = require('./root')

const app = express();

app.use(express.json())

app.use(cors({
  origin: [
    "http://localhost:3001"
],
}));

app.get('/*',(req,res) => {

  let location =""
  let subLOc
  
  const pathArray = req.params['0'] ? req.params['0'].split('/') : [];

  for (let i = 0; i < pathArray.length; i++) {
    const fileExt = pathArray[i].split('.') //Check for extension
    subLoc = fileExt[1] ? `['${pathArray[i]}']` : ('.'+pathArray[i] +'.children')
    location= location + subLoc
  }

    location='root.children.'+location.slice(1)
    locationType = eval(location) ? "" : ['type'] //Check if dir or file
    res.send(locationType || Object.keys(eval(location)) )
})

const PORT = 4000

app.listen(PORT,() => console.log(`server running on port ${PORT}`))