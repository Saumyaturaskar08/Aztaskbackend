import mongoose from "mongoose";
const MONGODB_URL = "mongodb+srv://Saurabh:Pass%40123@cluster0.8c5rprv.mongodb.net/DocumentUpload"
const connect = ()=>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log(`DB conncet`))
    .catch((error)=>{
        console.log("DB conncet failed");
        console.log(error)
        process.exit(1)
    })
}

export default connect