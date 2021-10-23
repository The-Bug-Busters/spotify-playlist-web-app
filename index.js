let express = require("express");

let app = express();

app.get("/", (req, res, next) => {
    res.json({'message': 'Welcome!'});
});

app.listen(80, () => {
    console.log("Server running on port 80");
});