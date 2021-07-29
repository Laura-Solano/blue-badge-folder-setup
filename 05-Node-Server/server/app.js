let express = require("express");
const app = express();
let sequelize = require("./db");
let user = require("./controllers/usercontroller");
let journal = require("./controllers/journalcontroller");
// app.use("/test", function(req,res){
//     res.send("This is a message from the test endpoint on the server!")
// });
// app.use("/Laura", function(req,res){
//     res.send("my name is Laura Solano")
// });
sequelize.sync();
app.use(express.json());
// res.json(response);
app.use("/journal", journal);
app.use("/user", user);
app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
