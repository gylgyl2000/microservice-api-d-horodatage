const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use('/public/', express.static(__dirname + '/public/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/salut", function (req, res) {
    res.json({greeting: 'salut API'});
});

app.get("/api/timestamp/", (req, res) => {
    res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api/timestamp/:date_string", (req, res) => {
    let dateString = req.params.date_string;

// Un nombre à 4 chiffres est un ISO-8601 valide pour le début de cette année
// 5 chiffres ou plus doivent être une heure Unix, jusqu'à ce que nous atteignions
// un problème de 10000 ans
    if (/\d{5,}/.test(dateString)) {
        const dateInt = parseInt(dateString);
        // Date considère les nombres comme des horodatages unix, les chaînes sont
        // traitées différemment
        res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
    } else {
        let dateObject = new Date(dateString);

        if (dateObject.toString() === "Invalid Date") {
            res.json({ error: "Invalid Date" });
        } else {
            res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
        };
    };
});

const listener = app.listen(process.env.PORT, function () {
    console.log('Votre application écoute sur le port ' + listener.address().port);
});