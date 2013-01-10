var express = require('express');
var people  = express();
// views case
people.get('/people/:name?', function(req, resp, next){
    var name = req.params.name;
    
    switch(name ? name.toLowerCase(): ''){
        case 'django':
        case 'bob':
        case 'mezzanine':
            resp.send(name +' is family');
            break;
        
        default:
            next();
    }
});

people.get('/people/*?', function(req, resp){
   resp.send('not Family :(');
});

people.get('/?', function(req, resp){
    resp.send('welcome family');   
});

// configure server
people.listen(8080);
console.log('listen port' + 8080);