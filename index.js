let express = require("express");

let app = express();

app.get("/", (req, res, next) => {
    res.json({'message': 'Welcome!'});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});