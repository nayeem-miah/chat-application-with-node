const mongoose  = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_URI)
        console.log("database connect");
    } catch (error) {
        console.log("there was a server site error", error)
    }
}
module.exports = connectDB;