const express = require("express");
const routes = require("./routes/routes")
const app = express();

const PORT = process.env.PORT || 3001;

app.use('/',routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
