const express = require("express");
const app = express();
const DBconnect = require("./helpers/DBconnect");
DBconnect();

app.use(express.json());
app.use("/api/users", require("./routes/UserRoute"));
app.use("/api/Host", require("./routes/HostRoute"));
app.use("/api/Activity", require("./routes/ActivityRoute"));
const Port = 5000;
app.listen(Port, (err) => {
  err ? console.log(err) : console.log(`server is runnig on port ${Port}`);
});
