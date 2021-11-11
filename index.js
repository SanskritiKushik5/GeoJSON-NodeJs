const express = require('express');

const app = express();

app.listen(process.env.port || 8080, () => {console.log("Listening to 8080")})