var express = require('express');
var app = express();

var data = [
    {
        id: 1,
        name: 'Item 1',
    },
    {
        id: 3,
        name: 'Item 3',
    },
    {
        id: 2,
        name: 'Item 2',
    },
    {
        id: 4,
        name: 'Item 4',
    },
];

app.get('/get-data', (req, res) => {
    console.log(data);
    res.json(data);
});

app.get('/solution2', (req, res) => {
    data.sort(function(a, b){
        return a.id - b.id;
    });
    console.log(data);
    res.json(data);
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('API listening at http://%s:%s', host, port);
});
