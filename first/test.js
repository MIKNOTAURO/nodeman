var express = require('express');
var people  = express();

// view engine
people.set('view engine', 'jade');
people.set('view options', {layout:true});
people.set('views', __dirname + '/views');

// views case
people.get('/people/:name?', function(req, resp, next){
    var name = req.params.name;
    
    switch(name ? name.toLowerCase(): ''){
        case 'django':
        case 'bob':
        case 'mezzanine':
            // 'people' name view, {name:name} value(s)
            resp.render('people', {name : name});
            break;
        default:
            next();
    }
});

people.get('/people/*?', function(req, resp){
   resp.send('not Family :(');
});

people.get('/?', function(req, resp){
    resp.send('<h1>Welcome family</h1>');   
});

// configure server
people.listen(8080);
console.log('listen port' + 8080);