const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.use("/", express.static("frontend"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});