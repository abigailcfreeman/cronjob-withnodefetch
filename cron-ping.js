const cron = require('node-cron');
const fetch = require('node-fetch');
// ...

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  
    fetch('https://api.airtable.com/v0/appoEibkPSfpZMpae/Table%201/?filterByFormula=({Name}="Amanda")', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer keyxHLZdOVB******' }
    }).then(res => res.json())
      .then(json => console.log(json));

});
