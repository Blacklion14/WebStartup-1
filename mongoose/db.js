const mongoose = require("mongoose");


try{
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log("u are connected with mongoose");
    } else {
      console.log("u r failed " + err);
    }
  });
} catch {
  console.log("Setup Mongoose");
}



