var express = require('express');
var app = express();
app.get('/api/v1/omikuji', function (req, res) {
    var resultTypes = ['大吉', '大凶'];
    var i = Math.floor(Math.random() * resultTypes.length);
    var obj = { result: resultTypes[i] };
    res.json(obj);
});
app.listen(3000, function () { return console.log('Listening on 3000 port!'); });
//# sourceMappingURL=index.js.map