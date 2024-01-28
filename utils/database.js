import mongoose from "mongoose";

let isConnected=false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected)
    {
        console.log("Already connected to database");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "expenses"
        });
        isConnected=true;
        console.log("Connected to database");
    }catch(e)
    {
        console.log("Error connecting to database");
    }
}