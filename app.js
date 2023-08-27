const express = require("express");
const cors = require("cors");

const projectRouter = require("./routers/projectRouter").router;
const technologyRouter = require("./routers/technologyRouter").router;

const app = express();

app.use(cors({ origin: "*" }));

app.use("/project", projectRouter);
app.use("/technology", technologyRouter);

const port = 3000;

app.listen(port, () => console.log(`running on port ${port}`));