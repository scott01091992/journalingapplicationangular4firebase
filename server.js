//modules
const express = require('express');
mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

app.use(express.static(path.join(__dirname,'./dist')));

app.use(bodyParser.json());

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './src/assets/profile/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

upload = multer({ //multer settings
                    storage: storage
                }).single('file');

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(6789, function(){
 console.log("listening on port 6789");
});
