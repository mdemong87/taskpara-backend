const mongoose = require("mongoose");

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL)
    } catch (err) {
        console.log("database is not connected...");
    }
}

module.exports = ConnectDB;
