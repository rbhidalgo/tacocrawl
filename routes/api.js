const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.MY_KEY)

 router.post("/", async (req, res) => {
   console.log(req.body.location)
  client
   .search({
    term: "tacos, taqueria, beer",
    location: `${req.body.location}, ca`,
    limit: 40,
    open_now: true,
    radius: 8050
   })
   .then(response => {
    const locationsName = response.jsonBody.businesses;
    
    res.json({
     status: 200,
     data: locationsName
    });
 
   })
   .catch(e => {
    console.log(e);
   });
 });


router.put('/', (req, res) => {
  return res.json({data: 'Received a PUT HTTP method'});
});

router.delete('/', (req, res) => {
  return res.json({data: 'Received a DELETE HTTP method'});
});


module.exports = router;
