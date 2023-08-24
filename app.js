const express = require("express");
const cors = require("cors");

const projectRouter = require("./routers/projectRouter").router;

const app = express();

app.use(cors({ origin: "*" }));

app.use("/project", projectRouter);


const port = 3000;

app.listen(port, () => console.log(`running on port ${port}`));