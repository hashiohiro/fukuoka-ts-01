let express = require('express');
let app = express();

app.get('/api/v1/omikuji', (req, res) => {
    let resultTypes = ['大吉', '大凶'];
    let i = Math.floor(Math.random() * resultTypes.length);
    let obj = {result : resultTypes[i]};
    res.json(obj);
});

app.listen(3000, () => console.log('Listening on 3000 port!'));