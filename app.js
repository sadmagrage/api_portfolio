const express = require("express");
const cors = require("cors");

const { router: homeRouter } = require("./routers/homeRouter");
const { router: projectRouter } = require("./routers/projectRouter");
const { router: technologyRouter } = require("./routers/technologyRouter");

const app = express();

app.use(cors({ origin: "*" }));

app.use(homeRouter);
app.use("/project", projectRouter);
app.use("/technology", technologyRouter);

const port = 3000;

app.listen(port, () => console.log(`running on port ${port}`));