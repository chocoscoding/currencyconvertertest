const express = require('express')
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(express.static('build'))
// import fetch from 'node-fetch';
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getdata = async ()=>{
    try {
        const datae = await fetch('http://data.fixer.io/api/latest?access_key=3ee75da46bbed49d7301c1f4901377bc', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
               }
        })
          const data = await datae.json()
          return data;
          
        } catch (err) {
            return err
      }
    }
    
    
    app.get('/api/v1/currencyapi', async (req, res) => {
        const mainreturn = await getdata();
        console.log('user hit the resource');

        res.status(200).json(mainreturn)
      })
   const port = process.env.PORT || 30002
    
app.listen(port)   