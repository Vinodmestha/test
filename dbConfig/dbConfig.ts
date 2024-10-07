import mongoose from "mongoose";
// track the connection
export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection
        connection.on("connected", ()=>{
            console.log("mongo db connected")
        })
        connection.on("error", ()=>{
                console.log("mongo db connected failed");
                process.exit()
        })
    } catch (error) {
        console.log("Something went wrong in connecting to db")
    }
};