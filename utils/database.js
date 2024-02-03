import mongoose from "mongoose";
import toast from "react-hot-toast";
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
        toast.error("Error connecting to database");
        console.log("Error connecting to database");
    }
}