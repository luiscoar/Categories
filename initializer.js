var mongoose = require('mongoose');
var config = require("./config/config");
var uri = config.db.host;
var port = process.env.PORT || config.app.port;
var cloudinary = require('cloudinary').v2;
var application = require('./application');
/*conexion a atlas*/
mongoose.connect(uri, { useNewUrlParser:true,useUnifiedTopology: true })
.then(
  ()=>{
    console.log(config.statup_messages.CONECTION_READY);

    application.listen(port,()=>
    {
	console.log(config.statup_messages.SERVER_RUNNING + " port :" + port);
    });
  }
).catch(
  (err) => {console.log(err);}
);
