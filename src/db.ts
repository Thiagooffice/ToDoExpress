import mongoose from "mongoose";
const connectToDatabase = async () => {
    try {
        const connction = await mongoose.connect(process.env.MONGO_URL)

        if(connction){
            console.log("Connection established ✅ ");
            
        }

    } catch (error) {
        console.log("Error in connectToDatabase", error);
        throw (error)
    }
}

export default connectToDatabase;